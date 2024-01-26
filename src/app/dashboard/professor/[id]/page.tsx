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

interface Store {
  store: {
    id: string;

    updateNome: (nome: string) => void;
    updateEmail: (email: string) => void;
  };
}

const getData = async ({ store }: Store) => {
  try {
    const userData = await fetch("/api/user/create/professor/get", {
      body: JSON.stringify(store.id),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { nome, email }: User = await userData.json();
    store.updateNome(nome);
    store.updateEmail(email);
  } catch (err) {
    alert("ocorreu um erro, recarregue a página");
  }
};

export default async function Professor() {
  const { id }: params = useParams();
  const store = profStore();

  await getData({
    store: {
      id: id as string,

      updateEmail: store.updateEmail,
      updateNome: store.upateNome,
    },
  });

  store.updateId(id as string);
  return (
    <main className="w-screen h-screen relative">
      <TabsProf email={store.email} nome={store.nome} />
    </main>
  );
}
