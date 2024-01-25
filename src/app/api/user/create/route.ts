import { prisma } from "@/lib/prisma/prismaclient";

interface UserDataCreate {
  matricula: string;
  nome: string;
  senha: string;
}

export async function POST(request: Request) {
  const { matricula, nome, senha }:UserDataCreate = await request.json()

  try {
    const userExists = await prisma.aluno.findFirst({
      where: {
        nome: nome,
        matricula: matricula,
      },
    });

    if (!userExists) {
      await prisma.aluno.create({
        data: {
          matricula,
          nome,
          senha,
        },
      });

      return new Response("", { status: 201 });
    }
  } catch {
    return new Response("ocorreu um erro", { status: 500 });
  }
}
