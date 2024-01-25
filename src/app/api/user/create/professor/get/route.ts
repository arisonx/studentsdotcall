import { prisma } from "@/lib/prisma/prismaclient";

interface Get {
  id: string;
}

export async function POST(request: Request) {
  const { id }: Get = await request.json();

  try {
    const prof = await prisma.professor.findFirst({
      where: {
        id: id,
      },
    });

    if (!prof) {
      return new Response("Professor não encontrado", { status: 404 });
    }

    return new Response(JSON.stringify(prof), { status: 201 });
  } catch {
    return new Response("ocorreu um erro", { status: 500 });
  }
}
