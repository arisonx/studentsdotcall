import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { AiOutlineDislike } from "react-icons/ai";
import { FaCheck, FaRegComment, FaRegHeart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { toast } from "sonner";
import { PostDialog } from "../dialogs/postDialog";

export function Mural() {
  return (
    <TabsContent value="mural" className="overflow-y-auto mt-0 w-full h-full">
      <Card className="h-auto w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-start gap-4 pt-4">
            Mural
          </CardTitle>
          <CardDescription>
            Interaja com o público postando conteúdos que serão vistos por todas as turmas do intituto
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center flex-col gap-4">
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
                Explicando como funciona o protocolo http
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center flex-col gap-4">
              <Image alt="imagem" src="/http.jpeg" width={500} height={500} />
              <p className="text-start">
                O HTTP, ou Protocolo de Transferência de Hipertexto, é um
                protocolo de comunicação que permite a transferência de dados
                entre um cliente e um servidor. Ele é o protocolo padrão usado
                na World Wide Web para transferir páginas da web, imagens,
                arquivos e outros recursos. O HTTP funciona de acordo com o
                modelo cliente-servidor. O cliente é o dispositivo que inicia a
                comunicação, enquanto o servidor é o dispositivo que responde à
                comunicação. No caso da web, o cliente é geralmente um navegador
                da web, enquanto o servidor é um servidor web. Quando um usuário
                digita um endereço de site na barra de endereços do navegador, o
                navegador envia uma solicitação HTTP ao servidor web. A
                solicitação HTTP inclui o endereço do recurso que o usuário
                deseja acessar. O servidor web recebe a solicitação HTTP e, se o
                recurso existir, o servidor responde com uma mensagem HTTP. A
                mensagem HTTP inclui o conteúdo do recurso solicitado, bem como
                informações sobre o status da solicitação. O navegador recebe a
                mensagem HTTP e exibe o conteúdo do recurso solicitado na tela
                do usuário. O processo de comunicação entre o cliente e o
                servidor pode ser dividido em duas etapas principais:
                <br />O HTTP, ou Protocolo de Transferência de Hipertexto, é um
                protocolo de comunicação que permite a transferência de dados
                entre um cliente e um servidor. Ele é o protocolo padrão usado
                na World Wide Web para transferir páginas da web, imagens,
                arquivos e outros recursos. O HTTP funciona de acordo com o
                modelo cliente-servidor. O cliente é o dispositivo que inicia a
                comunicação, enquanto o servidor é o dispositivo que responde à
                comunicação. No caso da web, o cliente é geralmente um navegador
                da web, enquanto o servidor é um servidor web. Quando um usuário
                digita um endereço de site na barra de endereços do navegador, o
                navegador envia uma solicitação HTTP ao servidor web. A
                solicitação HTTP inclui o endereço do recurso que o usuário
                deseja acessar. O servidor web recebe a solicitação HTTP e, se o
                recurso existir, o servidor responde com uma mensagem HTTP. A
                mensagem HTTP inclui o conteúdo do recurso solicitado, bem como
                informações sobre o status da solicitação. O navegador recebe a
                mensagem HTTP e exibe o conteúdo do recurso solicitado na tela
                do usuário. O processo de comunicação entre o cliente e o
                servidor pode ser dividido em duas etapas principais: 1. Envio
                da solicitação HTTP Na primeira etapa, o cliente envia uma
                solicitação HTTP ao servidor. O HTTP é um protocolo simples e
                eficiente que é a base da World Wide Web. Ele é usado para
                transferir uma ampla variedade de dados, incluindo páginas da
                web, imagens, arquivos e outros recursos.
              </p>
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
                  <AvatarImage src="/adam.svg" alt="perfil" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Professor Fred
              </CardTitle>
              <CardDescription>
                Explicando o que é criptografia.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center flex-col gap-4">
              <Image alt="imagem" src="/cripto.png" width={500} height={500} />
              <p className="text-start flex flex-col">
                Criptografia é o processo de transformar dados em um formato
                incompreensível para pessoas não autorizadas. Esse formato é
                chamado de cifrão. Para recuperar os dados originais, é
                necessário usar uma chave de descriptografia.
                <br />
                A criptografia é uma ferramenta importante para a
                segurança da informação. Ela pode ajudar a proteger dados
                confidenciais contra acesso não autorizado, alteração ou
                destruição.
                <br />
                Aqui estão alguns exemplos de como a criptografia é usada no
                mundo real:
                <strong>
                  1. Ao fazer compras online, seus dados de cartão de crédito
                  são criptografados antes de serem enviados para o site do
                  vendedor. Isso ajuda a proteger seus dados contra hackers.
                </strong>
                <strong>
                  2. Seu e-mail é criptografado quando você envia mensagens para
                  outros usuários. Isso ajuda a manter suas mensagens privadas.
                </strong>
                <strong>
                  3. Seu computador é criptografado com uma senha. Isso ajuda a
                  proteger seus dados caso seu computador seja roubado ou
                  perdido.
                </strong>
                A criptografia é uma tecnologia essencial para proteger nossos
                dados em um mundo cada vez mais digital.
              </p>

              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/CcU5Kc_FN_4?si=mtyjmXr3LgAPSyJv"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
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
              <CardDescription>
                Explicando como funciona o protocolo http
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center flex-col gap-4">
              <Image alt="imagem" src="/http.jpeg" width={500} height={500} />
              <p className="tex-start">
                HTTP, ou Protocolo de Transferência de Hipertexto, é um
                protocolo de comunicação que permite a transferência de dados
                entre um cliente e um servidor. Ele é o protocolo padrão usado
                na World Wide Web para transferir páginas da web, imagens,
                arquivos e outros recursos. O HTTP funciona de acordo com o
                modelo cliente-servidor. O cliente é o dispositivo que inicia a
                comunicação, enquanto o servidor é o dispositivo que responde à
                comunicação. No caso da web, o cliente é geralmente um navegador
                da web, enquanto o servidor é um servidor web. Quando um usuário
                digita um endereço de site na barra de endereços do navegador, o
                navegador envia uma solicitação HTTP ao servidor web. A
                solicitação HTTP inclui o endereço do recurso que o usuário
                deseja acessar. O servidor web recebe a solicitação HTTP e, se o
                recurso existir, o servidor responde com uma mensagem HTTP. A
                mensagem HTTP inclui o conteúdo do recurso solicitado, bem como
                informações sobre o status da solicitação. O navegador recebe a
                mensagem HTTP e exibe o conteúdo do recurso solicitado na tela
                do usuário. O processo de comunicação entre o cliente e o
                servidor pode ser dividido em duas etapas principais:
                <br />O HTTP, ou Protocolo de Transferência de Hipertexto, é um
                protocolo de comunicação que permite a transferência de dados
                entre um cliente e um servidor. Ele é o protocolo padrão usado
                na World Wide Web para transferir páginas da web, imagens,
                arquivos e outros recursos. O HTTP funciona de acordo com o
                modelo cliente-servidor. O cliente é o dispositivo que inicia a
                comunicação, enquanto o servidor é o dispositivo que responde à
                comunicação. No caso da web, o cliente é geralmente um navegador
                da web, enquanto o servidor é um servidor web. Quando um usuário
                digita um endereço de site na barra de endereços do navegador, o
                navegador envia uma solicitação HTTP ao servidor web. A
                solicitação HTTP inclui o endereço do recurso que o usuário
                deseja acessar. O servidor web recebe a solicitação HTTP e, se o
                recurso existir, o servidor responde com uma mensagem HTTP. A
                mensagem HTTP inclui o conteúdo do recurso solicitado, bem como
                informações sobre o status da solicitação. O navegador recebe a
                mensagem HTTP e exibe o conteúdo do recurso solicitado na tela
                do usuário. O processo de comunicação entre o cliente e o
                servidor pode ser dividido em duas etapas principais: 1. Envio
                da solicitação HTTP Na primeira etapa, o cliente envia uma
                solicitação HTTP ao servidor. O HTTP é um protocolo simples e
                eficiente que é a base da World Wide Web. Ele é usado para
                transferir uma ampla variedade de dados, incluindo páginas da
                web, imagens, arquivos e outros recursos.
              </p>

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
                  <AvatarImage src="/adam.svg" alt="perfil" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Professor Fred
              </CardTitle>
              <CardDescription>
                Explicando o que é criptografia.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center flex-col gap-4">
              <Image alt="imagem" src="/cripto.png" width={500} height={500} />
              <p className="text-start flex flex-col">
                Criptografia é o processo de transformar dados em um formato
                incompreensível para pessoas não autorizadas. Esse formato é
                chamado de cifrão. Para recuperar os dados originais, é
                necessário usar uma chave de descriptografia.
                <br />A criptografia é uma ferramenta importante para a
                segurança da informação. Ela pode ajudar a proteger dados
                confidenciais contra acesso não autorizado, alteração ou
                destruição.
                <br />
                Aqui estão alguns exemplos de como a criptografia é usada no
                mundo real:
                <strong>
                  1. Ao fazer compras online, seus dados de cartão de crédito
                  são criptografados antes de serem enviados para o site do
                  vendedor. Isso ajuda a proteger seus dados contra hackers.
                </strong>
                <strong>
                  2. Seu e-mail é criptografado quando você envia mensagens para
                  outros usuários. Isso ajuda a manter suas mensagens privadas.
                </strong>
                <strong>
                  3. Seu computador é criptografado com uma senha. Isso ajuda a
                  proteger seus dados caso seu computador seja roubado ou
                  perdido.
                </strong>
                A criptografia é uma tecnologia essencial para proteger nossos
                dados em um mundo cada vez mais digital.
              </p>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/CcU5Kc_FN_4?si=mtyjmXr3LgAPSyJv"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
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
              <CardTitle className="flex items-center justify- gap-4">
                <Avatar>
                  <AvatarImage src="/ronald.jpeg" alt="perfil" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Ronald Souza
              </CardTitle>
              <CardDescription>
                Explicando como funciona o protocolo http
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center flex-col gap-4">
              <Image alt="imagem" src="/http.jpeg" width={500} height={500} />
              <p className="text-start">
                HTTP, ou Protocolo de Transferência de Hipertexto, é um
                protocolo de comunicação que permite a transferência de dados
                entre um cliente e um servidor. Ele é o protocolo padrão usado
                na World Wide Web para transferir páginas da web, imagens,
                arquivos e outros recursos. O HTTP funciona de acordo com o
                modelo cliente-servidor. O cliente é o dispositivo que inicia a
                comunicação, enquanto o servidor é o dispositivo que responde à
                comunicação. No caso da web, o cliente é geralmente um navegador
                da web, enquanto o servidor é um servidor web. Quando um usuário
                digita um endereço de site na barra de endereços do navegador, o
                navegador envia uma solicitação HTTP ao servidor web. A
                solicitação HTTP inclui o endereço do recurso que o usuário
                deseja acessar. O servidor web recebe a solicitação HTTP e, se o
                recurso existir, o servidor responde com uma mensagem HTTP. A
                mensagem HTTP inclui o conteúdo do recurso solicitado, bem como
                informações sobre o status da solicitação. O navegador recebe a
                mensagem HTTP e exibe o conteúdo do recurso solicitado na tela
                do usuário. O processo de comunicação entre o cliente e o
                servidor pode ser dividido em duas etapas principais:
                <br />O HTTP, ou Protocolo de Transferência de Hipertexto, é um
                protocolo de comunicação que permite a transferência de dados
                entre um cliente e um servidor. Ele é o protocolo padrão usado
                na World Wide Web para transferir páginas da web, imagens,
                arquivos e outros recursos. O HTTP funciona de acordo com o
                modelo cliente-servidor. O cliente é o dispositivo que inicia a
                comunicação, enquanto o servidor é o dispositivo que responde à
                comunicação. No caso da web, o cliente é geralmente um navegador
                da web, enquanto o servidor é um servidor web. Quando um usuário
                digita um endereço de site na barra de endereços do navegador, o
                navegador envia uma solicitação HTTP ao servidor web. A
                solicitação HTTP inclui o endereço do recurso que o usuário
                deseja acessar. O servidor web recebe a solicitação HTTP e, se o
                recurso existir, o servidor responde com uma mensagem HTTP. A
                mensagem HTTP inclui o conteúdo do recurso solicitado, bem como
                informações sobre o status da solicitação. O navegador recebe a
                mensagem HTTP e exibe o conteúdo do recurso solicitado na tela
                do usuário. O processo de comunicação entre o cliente e o
                servidor pode ser dividido em duas etapas principais: 1. Envio
                da solicitação HTTP Na primeira etapa, o cliente envia uma
                solicitação HTTP ao servidor. O HTTP é um protocolo simples e
                eficiente que é a base da World Wide Web. Ele é usado para
                transferir uma ampla variedade de dados, incluindo páginas da
                web, imagens, arquivos e outros recursos.
              </p>

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
                  <AvatarImage src="/adam.svg" alt="perfil" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Professor Fred
              </CardTitle>
              <CardDescription>
                Explicando o que é criptografia.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center flex-col gap-4">
              <Image alt="imagem" src="/cripto.png" width={500} height={500} />
              <p className="text-start flex flex-col">
                Criptografia é o processo de transformar dados em um formato
                incompreensível para pessoas não autorizadas. Esse formato é
                chamado de cifrão. Para recuperar os dados originais, é
                necessário usar uma chave de descriptografia.
                <br />A criptografia é uma ferramenta importante para a
                segurança da informação. Ela pode ajudar a proteger dados
                confidenciais contra acesso não autorizado, alteração ou
                destruição.
                <br />
                Aqui estão alguns exemplos de como a criptografia é usada no
                mundo real:
                <strong>
                  1. Ao fazer compras online, seus dados de cartão de crédito
                  são criptografados antes de serem enviados para o site do
                  vendedor. Isso ajuda a proteger seus dados contra hackers.
                </strong>
                <strong>
                  2. Seu e-mail é criptografado quando você envia mensagens para
                  outros usuários. Isso ajuda a manter suas mensagens privadas.
                </strong>
                <strong>
                  3. Seu computador é criptografado com uma senha. Isso ajuda a
                  proteger seus dados caso seu computador seja roubado ou
                  perdido.
                </strong>
                A criptografia é uma tecnologia essencial para proteger nossos
                dados em um mundo cada vez mais digital.
              </p>
              <iframe
                width="450"
                height="315"
                src="https://www.youtube.com/embed/CcU5Kc_FN_4?si=mtyjmXr3LgAPSyJv"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
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
        </CardContent>
      </Card>
      <PostDialog/>
    </TabsContent>
  );
}
