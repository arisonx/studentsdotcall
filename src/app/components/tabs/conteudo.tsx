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
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoVideo } from "react-icons/go";
import { FaFilePdf } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { PdfRender } from "../pdf/first";
import { IoMdEye } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa";
import { PostDialog } from "../dialogs/postDialog";

interface IData {
  sem_upload?: boolean;
}

export function Conteudo({ sem_upload }: IData) {
  return (
    <TabsContent
      value="conteudo"
      className="overflow-y-auto mt-0 w-full h-full"
    >
      <Card className="w-full px-6 overflow-y-scroll rounded-none h-full border-2">
        <CardHeader>
          <CardTitle>Conteúdo</CardTitle>
          <CardDescription>
            Visualize materiais de apoio e conteúdo postado pelos discentes
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <GoVideo /> Vídeos
              </TabsTrigger>

              <TabsTrigger value="pdf" className="flex items-center gap-2">
                <FaFilePdf />
                PDF
              </TabsTrigger>

              <TabsTrigger value="links" className="flex items-center gap-2">
                <IoLinkSharp size={22} />
                Links
              </TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>Vídeo aula sobre modelo osi</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center flex-col gap-4">
                  <video src="/dança.mp4" controls></video>
                  <div className="flex gap-2">
                    <Button variant="link">
                      <FaRegHeart size={20} />
                    </Button>
                    <Button variant="link">
                      <AiOutlineDislike size={20} />
                    </Button>
                    <Popover>
                      <PopoverTrigger className="px-2">
                        <FaRegComment size={20} />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-row gap-4 w-[350px] h-[100px] items-center">
                        <Input className="w-[200px]" />
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast(
                              <p className="flex flex-row gap-4">
                                Comentário feito com sucesso!
                                <FaCheck size={20} className="text-green-400" />
                              </p>,
                              {
                                duration: 1000,
                              }
                            )
                          }
                        >
                          Comentar
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
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
                      <AvatarImage src="/koen.svg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Gilbert Pereira
                  </CardTitle>
                  <CardDescription>
                    Vídeo aula sobre Segurança de redes
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center flex-col gap-4">
                  <video src="/dança2.mp4" controls></video>
                  <div className="flex gap-2">
                    <Button variant="link">
                      <FaRegHeart size={20} />
                    </Button>
                    <Button variant="link">
                      <AiOutlineDislike size={20} />
                    </Button>
                    <Popover>
                      <PopoverTrigger className="px-2">
                        <FaRegComment size={20} />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-row gap-4 w-[350px] h-[100px] items-center">
                        <Input className="w-[200px]" />
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast(
                              <p className="flex flex-row gap-4">
                                Comentário feito com sucesso!
                                <FaCheck size={20} className="text-green-400" />
                              </p>,
                              {
                                duration: 1000,
                              }
                            )
                          }
                        >
                          Comentar
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
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
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>Vídeo aula sobre modelo osi</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center flex-col gap-4">
                  <video src="/dança.mp4" controls></video>
                  <div className="flex gap-2">
                    <Button variant="link">
                      <FaRegHeart size={20} />
                    </Button>
                    <Button variant="link">
                      <AiOutlineDislike size={20} />
                    </Button>
                    <Popover>
                      <PopoverTrigger className="px-2">
                        <FaRegComment size={20} />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-row gap-4 w-[350px] h-[100px] items-center">
                        <Input className="w-[200px]" />
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast(
                              <p className="flex flex-row gap-4">
                                Comentário feito com sucesso!
                                <FaCheck size={20} className="text-green-400" />
                              </p>,
                              {
                                duration: 1000,
                              }
                            )
                          }
                        >
                          Comentar
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
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
                      <AvatarImage src="/koen.svg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Gilbert Pereira
                  </CardTitle>
                  <CardDescription>
                    Vídeo aula sobre Segurança de redes
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center flex-col gap-4">
                  <video src="/dança2.mp4" controls></video>
                  <div className="flex gap-2">
                    <Button variant="link">
                      <FaRegHeart size={20} />
                    </Button>
                    <Button variant="link">
                      <AiOutlineDislike size={20} />
                    </Button>
                    <Popover>
                      <PopoverTrigger className="px-2">
                        <FaRegComment size={20} />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-row gap-4 w-[350px] h-[100px] items-center">
                        <Input className="w-[200px]" />
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast(
                              <p className="flex flex-row gap-4">
                                Comentário feito com sucesso!
                                <FaCheck size={20} className="text-green-400" />
                              </p>,
                              {
                                duration: 1000,
                              }
                            )
                          }
                        >
                          Comentar
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 19:01
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="pdf" className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" sizes="20" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>Pdf sobre redes</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <PdfRender path="/redes1.pdf" />

                  <Link
                    href="/redes1.pdf"
                    className="text-blue-400 flex flex-row gap-[1px] items-center"
                  >
                    Ver <IoMdEye size={20} />
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
                      <AvatarImage src="/koen.svg" sizes="20" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Carlos Pereira
                  </CardTitle>
                  <CardDescription>
                    Pdf sobre introdução á informática - Hardware E Software
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <PdfRender path="/hardware.pdf" />

                  <Link
                    href="/hardware.pdf"
                    className="text-blue-400 flex flex-row gap-[1px] items-center"
                  >
                    Ver <IoMdEye size={20} />
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 23:13
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.jpeg" sizes="20" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Denis Carmuça
                  </CardTitle>
                  <CardDescription>
                    Pdf sobre Segurança da Informação
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <PdfRender path="/segurança.pdf" />

                  <Link
                    href="/segurança.pdf"
                    className="text-blue-400 flex flex-row gap-[1px] items-center"
                  >
                    Ver <IoMdEye size={20} />
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 23:13
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" sizes="20" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>Pdf sobre redes</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <PdfRender path="/redes1.pdf" />

                  <Link
                    href="/redes1.pdf"
                    className="text-blue-400 flex flex-row gap-[1px] items-center"
                  >
                    Ver <IoMdEye size={20} />
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
                      <AvatarImage src="/koen.svg" sizes="20" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Carlos Pereira
                  </CardTitle>
                  <CardDescription>
                    Pdf sobre introdução á informática - Hardware E Software
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <PdfRender path="/hardware.pdf" />

                  <Link
                    href="/hardware.pdf"
                    className="text-blue-400 flex flex-row gap-[1px] items-center"
                  >
                    Ver <IoMdEye size={20} />
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 23:13
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.jpeg" sizes="20" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Denis Carmuça
                  </CardTitle>
                  <CardDescription>
                    Pdf sobre Segurança da Informação
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <PdfRender path="/hardware.pdf" />

                  <Link
                    href="/segurança.pdf"
                    className="text-blue-400 flex flex-row gap-[1px] items-center"
                  >
                    Ver <IoMdEye size={20} />
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  21/09/2021 - 23:13
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="links" className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>
                    Link de um artigo importante que fala sobre firewall.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://www.kaspersky.com.br/resource-center/definitions/firewall"
                    className="text-blue-400"
                  >
                    https://www.kaspersky.com.br/resource-center/definitions/firewall
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
                  <CardDescription>
                    Link de um mapa mental que contém os principais componentes
                    de um computador
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://cursos.escolaeducacao.com.br/artigo/componentes-de-um-computador"
                    className="text-blue-400"
                  >
                    https://cursos.escolaeducacao.com.br/artigo/componentes-de-um-computador{" "}
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
                      <AvatarImage src="/albert.svg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Pedro Sova
                  </CardTitle>
                  <CardDescription>
                    Link de uma página que explica a diferença entre software e
                    hardware
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://www.significados.com.br/hardware-e-software/"
                    className="text-blue-400"
                  >
                    https://www.significados.com.br/hardware-e-software/{" "}
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  23/12/2021 - 22:12
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-4">
                    <Avatar>
                      <AvatarImage src="/ronald.jpeg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Ronald Souza
                  </CardTitle>
                  <CardDescription>
                    Link de um artigo importante que fala sobre firewall.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://www.kaspersky.com.br/resource-center/definitions/firewall"
                    className="text-blue-400"
                  >
                    https://www.kaspersky.com.br/resource-center/definitions/firewall
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
                  <CardDescription>
                    Link de um mapa mental que contém os principais componentes
                    de um computador
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://cursos.escolaeducacao.com.br/artigo/componentes-de-um-computador"
                    className="text-blue-400"
                  >
                    https://cursos.escolaeducacao.com.br/artigo/componentes-de-um-computador{" "}
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
                      <AvatarImage src="/albert.svg" alt="perfil" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Pedro Sova
                  </CardTitle>
                  <CardDescription>
                    Link de uma página que explica a diferença entre software e
                    hardware
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://www.significados.com.br/hardware-e-software/"
                    className="text-blue-400"
                  >
                    https://www.significados.com.br/hardware-e-software/{" "}
                  </Link>
                </CardContent>
                <CardFooter className="gap-2 text-sm text-gray-700">
                  <MdDateRange size={22} />
                  23/12/2021 - 22:12
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {!sem_upload&&(<PostDialog />)}
    </TabsContent>
  );
}
