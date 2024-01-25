import { prisma } from "@/lib/prisma/prismaclient";

interface UserDataCreate {
  id: string;
}

export async function POST(request: Request) {
  const { id } = (await request.json()) as UserDataCreate;

  try {
    const userExists = await prisma.aluno.findFirst({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      return new Response("aluno nao existe", { status: 404 });
    }

    await prisma.aluno.delete({
      where: {
        id: id,
      },
    });

    return new Response(JSON.stringify(userExists), { status: 200 });
  } catch (err) {
    return new Response("ocorreu um erro", { status: 500 });
  }
}
