import { prisma } from "@/lib/prisma/prismaclient";

interface UserDataCreate {
  nome: string;
  senha: string;
  email: string;
}

export async function POST(request: Request) {
  const { nome, senha, email }: UserDataCreate = await request.json();

  try {
    const userExists = await prisma.professor.findFirst({
      where: {
        email,
        nome,
      },
    });

    if (!userExists) {
      const newprof = await prisma.professor.create({
        data: {
          nome,
          senha,
          email,
        },
      });

      return new Response(newprof.id, { status: 201 });
    }
  } catch {
    return new Response("ocorreu um erro", { status: 500 });
  }
}
