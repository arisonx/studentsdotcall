"use client";
import { HeaderWithLogo } from "../components/HeaderWithLogo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlunoForm } from "./components/alunoForm";
import { ProfessorForm } from "./components/professorForm";
import { DiretorForm } from "./components/diretorForm";
import { PublicoForm } from "./components/publicoForm";
export default function Register() {
  return (
    <main className="w-full h-auto">
      <HeaderWithLogo text="Registrar-se" />

      <div className="w-full flex justify-center">
        <Tabs defaultValue="aluno" className="w-[500px]">
          <TabsList className="flex w-full justify-between p-6">
            <TabsTrigger className="w-[33.3%] rounded-xl" value="aluno">
              Aluno
            </TabsTrigger>
            <TabsTrigger className="w-[33.3%] rounded-xl" value="professor">
              Professor
            </TabsTrigger>
            <TabsTrigger className="w-[33.3%] rounded-xl" value="diretor">
              Diretor
            </TabsTrigger>
          </TabsList>

          {/*aluno*/}
          <AlunoForm />

          {/*PROFESSORES*/}
          <ProfessorForm />

          {/*DIRETORES*/}
          <DiretorForm />
        </Tabs>
      </div>
    </main>
  );
}
