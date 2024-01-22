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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { AiOutlineDislike } from "react-icons/ai";
import { CgFeed } from "react-icons/cg";
import { FaCheck, FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { toast } from "sonner";

export function Forum() {
  return (
    <TabsContent value="forum" className="overflow-y-auto mt-0 w-full h-full">
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-start gap-4 pt-4">
            Fórum
          </CardTitle>
          <CardDescription>
            Interaja com o público postando conteúdos que serão vistos por
            professores, alunos e pessoas de fora do instituto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-start gap-4">
                <Avatar>
                  <AvatarImage src="ronald.jpeg" alt="perfil" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Ronald Souza
              </CardTitle>
              <CardDescription>Vídeo aula sobre modelo osi</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center flex-col gap-4">
              <video src="dança.mp4" controls></video>
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
    </TabsContent>
  );
}
