import { prisma } from "@/lib/prisma/prismaclient";

interface UserDataCreate {
  email: string;
  senha: string;
}

export async function POST(request: Request) {
  const { email, senha } = (await request.json()) as UserDataCreate;

  try {
    const userExists = await prisma.professor.findFirst({
      where: {
        email: email,
        senha: senha,
      },
    });

    if (!userExists) {
      return new Response("professor nao existe", { status: 404 });
    } else {
      return new Response(JSON.stringify(userExists), { status: 200 });
    }
  } catch (err) {
    return new Response("ocorreu um erro", { status: 500 });
  }
}
