import { prisma } from "@/lib/prisma/prismaclient";

interface UserDataCreate {
  matricula: string;
  senha: string;
}

export async function POST(request: Request) {
  const { matricula, senha } = (await request.json()) as UserDataCreate;

  try {
    const userExists = await prisma.aluno.findFirst({
      where: {
        matricula: matricula,
        senha: senha,
      },
    });

    if (!userExists) {
      return new Response("aluno nao existe", { status: 404 });
    } else {
      return new Response(JSON.stringify(userExists), { status: 200 });
    }
  } catch (err) {
    return new Response("ocorreu um erro", { status: 500 });
  }
}
