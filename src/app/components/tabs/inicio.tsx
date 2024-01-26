"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoMdNotifications } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CgFeed } from "react-icons/cg";
import { PiVideoLight } from "react-icons/pi";
import { Skeleton } from "@/components/ui/skeleton";

interface UserParams {
  nome?: string;
}

export function Inicio({ nome }: UserParams) {
  return (
    <TabsContent value="inicio" className="overflow-y-auto mt-0 w-full h-full">
      <Card className="w-full px-6 overflow-y-scroll rounded-none h-full border-2">
        <CardHeader>
          <CardTitle>
            {nome ? (
              <p className="flex gap-2">
                Olá
                <span>{nome}</span>
              </p>
            ) : (
              <Skeleton className="h-8 w-[200px] -full" />
            )}
          </CardTitle>
          <CardDescription>
            Visualize suas notificações e atualizaçõs diárias
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col">
          <Tabs defaultValue="notificacoes_inicio" className="w-full">
            <TabsList>
              <TabsTrigger
                value="notificacoes_inicio"
                className="flex items-center gap-2"
              >
                <IoMdNotifications /> Notificações
              </TabsTrigger>
              <TabsTrigger
                value="forum_inicio"
                className="flex items-center gap-2"
              >
                <CgFeed />
                Fórum
              </TabsTrigger>
              <TabsTrigger
                value="conteudo_inicio"
                className="flex items-center gap-2"
              >
                <PiVideoLight />
                Conteúdo
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="notificacoes_inicio"
              className="flex flex-col gap-4"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <IoMdNotifications size={25} />
                    Sua senha foi alterada
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  Sua senha foi alterada, verifique a atividade
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 19:01
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full " />
                      </AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  Comentou na sua publicaçã no fórum
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 19:01
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.jpeg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Walbert Monteiro
                  </CardTitle>
                </CardHeader>
                <CardContent>Curtiu sua publicação no fórum</CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 13:04
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/adam.svg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Gilberto Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>Curtiu sua publicação no fórum</CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 13:06
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/mavis.svg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Carla Soares
                  </CardTitle>
                </CardHeader>
                <CardContent>Comentou na sua publicação no fórum</CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 13:04
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="forum_inicio" className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" sizes="20" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>Fez uma publicação no fórum</CardDescription>
                </CardHeader>
                <CardContent>
                  Redes de computadores e suas complexidades:
                  <br />
                  1- camadas
                  <br />
                  ...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 11:01
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/albert.svg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Albert Reis
                  </CardTitle>
                  <CardDescription>Fez uma publicação no fórum</CardDescription>
                </CardHeader>
                <CardContent>
                  Programação nunca foi tão fácil.
                  <br />
                  Aqui está um conteúdo muito relevante relacionado
                  <br />
                  ...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  22/09/2021 - 14:04
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/selma.svg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Selma Carvalho
                  </CardTitle>
                  <CardDescription>Fez uma publicação no fórum</CardDescription>
                </CardHeader>
                <CardContent>
                  Estou amando cada conteúdo postado aqui!
                  <br />
                  Venho divulgar meu sentimento de agradecimento por tudo e
                  todos ...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 11:01
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>Fez uma publicação no fórum</CardDescription>
                </CardHeader>
                <CardContent>
                  Apresento a vocês um dos melhores roteadores!
                  <br />A Xiomi recentemente lançou o que será uma evolução no
                  mundo dos roteadores...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  22/09/2021 - 18:32
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/maria.svg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Maria Joyce
                  </CardTitle>
                  <CardDescription>Fez uma publicação no fórum</CardDescription>
                </CardHeader>
                <CardContent>
                  Inteligência Artificial vem nos ajudandi muito no campus.
                  <br />
                  Atualmente usamos o ChatGPT para tirar dúvidas e nos ajudar
                  nos conteúdos, já que programação tem suas complexidades...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  20/09/2021 - 15:23
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent
              value="conteudo_inicio"
              className="flex flex-col gap-4"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" alt="perfil" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>Postou um conteúdo</CardDescription>
                </CardHeader>
                <CardContent>
                  Aula sobre camada OSI
                  <br />
                  Aqui está o conteúdo sobre a aula que envolvia o modelo OSI...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  23/09/2021 - 14:21
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.jpeg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Denis Carmuça
                  </CardTitle>
                  <CardDescription>Postou um conteúdo</CardDescription>
                </CardHeader>
                <CardContent>
                  Aula sobre hardware
                  <br />
                  Aqui está o conteúdo sobre a aula de hardware...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  23/09/2021 - 15:45
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Ronald Soza
                  </CardTitle>
                  <CardDescription>Postou um conteúdo</CardDescription>
                </CardHeader>
                <CardContent>
                  PDF Sobre TCP/IP
                  <br />
                  Aqui está o conteúdo sobre a aula que aborda o modelo
                  TCP/IP...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  23/09/2021 - 16:54
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/albert.svg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Albert Carvalho
                  </CardTitle>
                  <CardDescription>Postou um conteúdo</CardDescription>
                </CardHeader>
                <CardContent>
                  Vídeo sobre a importância de firewalls e ant vírus para a sua
                  segurança...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  23/09/2021 - 23:00
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.jpeg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Denis Carmuça
                  </CardTitle>
                  <CardDescription>Postou um conteúdo</CardDescription>
                </CardHeader>
                <CardContent>
                  Mapa mental que ilustra um roadmap de como aprender
                  arquitetura de computadores...
                  <Link href="/" className="text-blue-400">
                    Ver mais
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  23/09/2021 - 15:45
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
