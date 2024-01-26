import { create } from "zustand";

type State = {
  id: string;
  email: string;
  nome: string;
};

type Action = {
  updateId: (firstName: State["id"]) => void;
  updateEmail: (lastName: State["email"]) => void;
  upateNome: (lastName: State["nome"]) => void;
};


export const profStore = create<State & Action>((set) => ({
  email: "",
  nome: "",
  id: "",
  upateNome: (nome) => set(() => ({ nome: nome })),
  updateEmail: (email) => set(() => ({ email: email })),
  updateId: (id) => set(() => ({ id: id })),
}));
