import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoIosAdd } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Image from "next/image";

export function PostDialog() {
  const [image, setImage] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute right-5 bottom-4">
          Postar
          <IoIosAdd size={25} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Postagem</DialogTitle>
          <DialogDescription>
            Faça uma postagem para que todos no fórum veja!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Título
            </Label>
            <Textarea
              id="titulo"
              placeholder="Informe o título do post"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              conteúdo
            </Label>
            <Textarea
              id="conteudo"
              placeholder="Informe o conteúdo do post"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Imagem
            </Label>
            <Input
              id="imagem"
              className="col-span-3"
              type="file"
              onChange={(event) => {
                if (event.target.files) {
                  setImage(URL.createObjectURL(event.target.files[0]));
                }
              }}
            />
            {image && (
              <Image
                className="ml-6"
                src={image}
                width={60}
                height={60}
                alt=""
              />
            )}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Publicar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
