"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineEdit } from "react-icons/md";

export function Conta() {
  return (
    <TabsContent value="conta" className="mt-0 w-full h-full">
      <Card className="w-full rounded-none h-full border-2 px-6">
        <CardHeader>
          <CardTitle>Conta</CardTitle>
          <CardDescription>Visualize e edite seus dados</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-8 pb-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  disabled={true}
                  id="nome"
                  value="Aluno Exemplo da silva"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-Mail</Label>
                <Input disabled={true} id="email" value="aluno@exemplo.com" />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="matricula">Matrícula</Label>
                <Input
                  disabled={true}
                  id="matricula"
                  value="aluno@exemplo.com"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  disabled={true}
                  id="senha"
                  type="password"
                  value="aosjkssjjskkjakjjss"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="flex gap-3">
            Editar
            <MdOutlineEdit size={18} />
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
