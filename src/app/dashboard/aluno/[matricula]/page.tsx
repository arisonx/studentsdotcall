"use client";
import { FiActivity } from "react-icons/fi";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoPersonSharp } from "react-icons/io5";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { Button } from "@/components/ui/button";
import { TiHome } from "react-icons/ti";
import { PiVideoLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Inicio } from "../../../components/tabs/inicio";
import { Conta } from "../../../components/tabs/conta";
import { Atividade } from "../../../components/tabs/atividade";
import { Conteudo } from "../../../components/tabs/conteudo";
import { Forum } from "../../../components/tabs/forum";
import { useParams } from "next/navigation";
import { MdPublic } from "react-icons/md";
import { Mural } from "@/app/components/tabs/mural";

interface User {
  nome: string;
  matricula: string;
  id: string;
  senha: string;
}

interface params {
  matricula?: string;
}

export default function Dashboard() {
  const { matricula }: params = useParams();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(true);
  const [nome, setNome] = useState("");

  const getUserData = async function () {
    const userData = await fetch("/api/user/get", {
      body: JSON.stringify(matricula),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!userData.ok) {
      alert("ocorreu um erro, recarregue a página");
    } else {
      const { nome }: User = await userData.json();

      setNome(nome);
    }
  };
  getUserData();

  const logout = async () => {
    router.push("/");
  };

  const handleSideBar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <main className="w-screen h-screen relative">
      {!openMenu && (
        <Button
          className="absolute top-0 left-1 px-1"
          variant="ghost"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <FaCircleArrowLeft size={30} />
        </Button>
      )}

      <Tabs defaultValue="inicio" className="w-full h-full flex flex-row">
        {/*TABLIST */}
        {openMenu && (
          <TabsList
            className="
            flex w-[140px] flex-col h-full rounded-none gap-8 px-2"
          >
            <Button
              className="absolute top-4 text-3xl"
              variant="secondary"
              onClick={handleSideBar}
            >
              <AiFillCloseCircle size={40} />
            </Button>

            {/*INICIO*/}
            <TabsTrigger value="inicio" className="w-full flex py-3">
              <div className="w-[40%] flex">
                <TiHome size={20} />
              </div>
              <div className="w-[60%] flex justify-start">
                <p>início</p>
              </div>
            </TabsTrigger>

            {/*CONTEÚDO*/}
            <TabsTrigger value="conteudo" className="w-full flex py-3">
              <div className="w-[40%] flex">
                <PiVideoLight size={20} />
              </div>
              <div className="w-[60%] flex justify-start">
                <p>Conteúdo</p>
              </div>
            </TabsTrigger>

            {/*CONTA*/}
            <TabsTrigger value="conta" className="w-full flex py-3">
              <div className="w-[40%] flex">
                <IoPersonSharp size={20} />
              </div>
              <div className="w-[60%] flex justify-start">
                <p>Conta</p>
              </div>
            </TabsTrigger>

            {/*ATIVIDADE*/}
            <TabsTrigger value="atividade" className="w-full flex py-3">
              <div className="w-[40%]">
                <FiActivity size={20} />
              </div>
              <div className="w-[60%] flex justify-start">
                <p>Atividade</p>
              </div>
            </TabsTrigger>

            {/*FÓRUM*/}
            <TabsTrigger value="forum" className="w-full flex py-3">
              <div className="w-[40%]">
                <TfiLayoutMediaLeft size={20} />
              </div>
              <div className="w-[60%] flex justify-start">
                <p>Fórum</p>
              </div>
            </TabsTrigger>

            {/* MURAL */}
            <TabsTrigger value="mural" className="w-full flex py-3">
              <div className="w-[40%]">
                <MdPublic size={20} />
              </div>
              <div className="w-[60%] flex justify-start">
                <p>Mural</p>
              </div>
            </TabsTrigger>

            {/*LOGOUT*/}
            <TabsTrigger
              value="logout"
              className="w-full flex py-3"
              onClick={logout}
            >
              <div className="w-[40%]">
                <CiLogout size={20} />
              </div>
              <div className="w-[60%] flex justify-start">Sair</div>
            </TabsTrigger>
          </TabsList>
        )}

        {/*-------------------TABS----------------------------*/}
        <section
          className="flex flex-1 overflow-hidden"
          onClick={() => setOpenMenu(false)}
        >
          {/*INICIO*/}
          <Inicio nome={nome} />

          {/*CONTA*/}
          <Conta matricula={matricula!} nome={nome} sem_email={true} />

          {/*ATIVIDADES*/}
          <Atividade />

          {/*CONTEÚDO*/}
          <Conteudo sem_upload={true} />

          {/*FÓRUM*/}
          <Forum />

          {/*MURAL */}
          <Mural />
        </section>
      </Tabs>
    </main>
  );
}
