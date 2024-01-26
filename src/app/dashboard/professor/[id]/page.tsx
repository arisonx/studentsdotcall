"use client";
import { useParams } from "next/navigation";
import { profStore } from "@/lib/store/profstore";
import { TabsProf } from "./components/tabs";

interface params {
  id?: string;
}

interface User {
  nome: string;
  email: string;
  id: string;
  senha: string;
}

const store = profStore();
const { id }: params = useParams();

async () => {
  try {
    const userData = await fetch("/api/user/create/professor/get", {
      body: JSON.stringify(id),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { nome, email }: User = await userData.json();
    store.upateNome(nome);
    store.updateEmail(email);
  } catch (err) {
    alert("ocorreu um erro, recarregue a página");
  }
};

export default async function Professor() {
  return (
    <main className="w-screen h-screen relative">
      <TabsProf email={store.email} nome={store.nome} />
    </main>
  );
}
