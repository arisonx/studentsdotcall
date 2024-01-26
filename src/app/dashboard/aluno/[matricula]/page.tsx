"use client";
import { useParams } from "next/navigation";
import { Main } from "./components/tabs";
import { useAlunoStore } from "@/lib/store/alunostore";

interface User {
  nome: string;
  matricula: string;
  id: string;
  senha: string;
}

interface params {
  matricula?: string;
}

interface Store {
  alunostore: {
    matricula: string;
    updatenome: (nome: string) => void;
    updatematricula: (matricula: string) => void;
  };
}

const getData = async ({ alunostore }: Store) => {
  try {
    const userData = await fetch("/api/user/get", {
      body: JSON.stringify(alunostore.matricula),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    const { nome }: User = await userData.json();

    alunostore.updatenome(nome);
    alunostore.updatematricula(alunostore.matricula);
  } catch (err) {
    alert("ocorreu um erro, recarregue a página");
  }
};

export default async function DashboardAluno() {
  const alunostore = useAlunoStore();
  const { matricula }: params = useParams();
  alunostore.updatematricula(matricula as string);
  await getData({
    alunostore: {
      matricula: matricula as string,
      updatematricula: alunostore.updatematricula,
      updatenome: alunostore.updatenome,
    },
  });

  return (
    <main className="w-screen h-screen relative">
      <Main nome={alunostore.nome} matricula={alunostore.matricula} />
    </main>
  );
}
