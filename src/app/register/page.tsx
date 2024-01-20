"use client";
import { HeaderWithLogo } from "../components/HeaderWithLogo";
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

export default function Register() {
  return (
    <main className="w-screen h-screen">
      <HeaderWithLogo text="Registrar-se"/>
    
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
          <TabsContent value="aluno">
            <Card>
              <CardHeader>
                <CardTitle>Aluno</CardTitle>
                <CardDescription>
                  <strong>Crie</strong> uma <strong>conta</strong> para acessar a plataforma.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="matricula">Matrícula</Label>
                  <Input id="matricula" type="number" placeholder="informe sua matrícula" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="matricula">Nome</Label>
                  <Input id="matricula" type="text" placeholder="informe seu nome" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="matricula">Token</Label>
                  <Input id="matricula" type="text" placeholder="informe seu token" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="senha">Senha</Label>
                  <Input id="senha" type="password" placeholder="informe sua senha" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-10 items-center">
                <Button className="px-10">Registrar</Button>
                <Link
                  className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                  href="/"
                >
                  Já tenho uma conta
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
                <strong>Crie</strong> uma <strong>conta</strong> para acessar a plataforma.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="professor_matricula">E-Mail Institucional</Label>
                  <Input
                    id="professor_matricula"
                    placeholder="informe seu e-mail"
                    type="email"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="professor_nome">Nome</Label>
                  <Input
                    id="professor_nome"
                    placeholder="informe seu nome"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="professor_token">Token</Label>
                  <Input
                    id="professor_token"
                    placeholder="informe seu token"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="professor_senha">Senha</Label>
                  <Input
                    id="professor_senha"
                    placeholder="informe sua senha"
                    type="password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex gap-10 items-center">
                <Button className="px-10">Registrar</Button>
                <Link
                  className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                  href="/"
                >
                  Já tenho uma conta
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
                <strong>Crie</strong> uma <strong>conta</strong> para acessar a plataforma.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="diretor_email">
                    E-Mail Institucional
                  </Label>
                  <Input id="diretor_email" placeholder="informe seu email institucional" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="diretor_nome">Nome</Label>
                  <Input id="diretor_nome" placeholder="informe seu nome" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="diretor_token">Token</Label>
                  <Input id="diretor_token" placeholder="informe seu token" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="diretor_senha">Senha</Label>
                  <Input id="diretor_senha" placeholder="informe sua senha" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-10 items-center">
                <Button className="px-10">Registrar</Button>
                <Link
                  className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                  href="/"
                >
                  Já tenho uma conta
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
