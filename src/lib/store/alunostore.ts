import { create } from "zustand";

type State = {
  nome: string;
  matricula: string;
};

type Action = {
  updatematricula: (firstName: State["matricula"]) => void;
  updatenome: (lastName: State["nome"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useAlunoStore = create<State & Action>((set) => ({
  matricula: "",
  nome: "",
  updatematricula: (matricula) => set(() => ({ matricula: matricula })),
  updatenome: (nome) => set(() => ({ nome: nome })),
}));
