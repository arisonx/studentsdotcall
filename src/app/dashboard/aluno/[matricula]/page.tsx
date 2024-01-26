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
const { matricula }: params = useParams();
const alunostore = useAlunoStore();

async () => {
  try {
    const userData = await fetch("/api/user/get", {
      body: JSON.stringify(matricula),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    const { nome }: User = await userData.json();

    alunostore.updatenome(nome);
    alunostore.updatematricula(matricula as string);
  } catch (err) {
    alert("ocorreu um erro, recarregue a página");
  }
};

export default async function DashboardAluno() {
  return (
    <main className="w-screen h-screen relative">
      <Main nome={alunostore.nome} matricula={alunostore.matricula} />
    </main>
  );
}
