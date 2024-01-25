"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { HeaderWithLogo } from "./components/HeaderWithLogo";

export default function Home() {
  return (
    <main className="w-screen h-screen">
        <HeaderWithLogo text="Entrar"/>
      <div className="w-full flex justify-center">
        <Tabs defaultValue="aluno" className="w-[500px]">
          <TabsList className="flex w-full justify-between p-6">
            <TabsTrigger className="w-[33.3%] rounded-xl" value="aluno">aluno</TabsTrigger>
            <TabsTrigger className="w-[33.3%] rounded-xl" value="professor">Professor</TabsTrigger>
            <TabsTrigger className="w-[33.3%] rounded-xl" value="diretor">Diretor</TabsTrigger>
            <TabsTrigger className="w-[33.3%] rounded-xl" value="publico">Público</TabsTrigger>
          </TabsList>
          <TabsContent value="aluno">
            <Card>
              <CardHeader>
                <CardTitle>Aluno</CardTitle>
                <CardDescription>
                  Entre na sua conta como <strong>aluno</strong> para
                  interagir, visualizar e postar conteúdos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="aluno_matricula">Matrícula</Label>
                  <Input id="aluno_matricula" placeholder="informe sua matrícula" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="aluno_senha">Senha</Label>
                  <Input id="aluno_senha" placeholder="informe sua senha" />
                </div>
              
              </CardContent>
              <CardFooter className="flex gap-10 items-center">
                <Button className="px-10">Entrar</Button>
                <Link
                  className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                  href="/register"
                >
                  não tenho uma conta
                  <IoIosArrowRoundForward />
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          {/*PROFESSORES*/}
          <TabsContent value="professor">
            <Card>
              <CardHeader>
                <CardTitle>Professor</CardTitle>
                <CardDescription>
                  Entre na sua conta como <strong>professor</strong> para
                  administrar, interagir e postar conteúdos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="professor_email">E-Mail institucional</Label>
                  <Input id="professor_email" placeholder="informe seu e-mail institucional" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="professor_senha">Senha</Label>
                  <Input id="professor_senha" placeholder="informe sua senha" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-10 items-center">
                <Button className="px-10">Entrar</Button>
                <Link
                  className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                  href="/register"
                >
                  Não tenho uma conta
                  <IoIosArrowRoundForward />
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          {/*DIRETORES*/}
          <TabsContent value="diretor">
            <Card>
              <CardHeader>
                <CardTitle>Diretor</CardTitle>
                <CardDescription>
                  Entre na sua conta como <strong>Diretor</strong> para
                  administrar, interagir e postar conteúdos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="diretor_email">E-Mail Institucional</Label>
                  <Input id="diretor_email" placeholder="informe seu e-mail institucional" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="diretor_senha">Senha</Label>
                  <Input id="diretor_senha" placeholder="informe sua senha" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-10 items-center">
                <Button className="px-10">Entrar</Button>
                <Link
                  className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                  href="/register"
                >
                  Não tenho uma conta
                  <IoIosArrowRoundForward />
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

           {/*PÚBLICO*/}
           <TabsContent value="publico">
            <Card>
              <CardHeader>
                <CardTitle>Público</CardTitle>
                <CardDescription>
                  Entre na sua conta como <strong>Público</strong> para
                  interagir e postar conteúdos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="diretor_email">E-Mail</Label>
                  <Input id="diretor_email" placeholder="informe seu e-mail institucional" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="diretor_senha">Senha</Label>
                  <Input id="diretor_senha" placeholder="informe sua senha" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-10 items-center">
                <Button className="px-10">Entrar</Button>
                <Link
                  className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                  href="/register"
                >
                  Não tenho uma conta
                  <IoIosArrowRoundForward />
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>


        </Tabs>
      </div>
    </main>
  );
}
