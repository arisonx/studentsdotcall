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
import { Skeleton } from "@/components/ui/skeleton";

interface ContaParams {
  nome?: string;
  matricula?: string;
  email?: string;
  sem_matricula?: boolean;
  sem_email?: boolean;
}

export function Conta({
  matricula,
  nome,
  email,
  sem_matricula,
  sem_email,
}: ContaParams) {
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
                {nome ? (
                  <Input disabled={true} id="nome" value={nome} />
                ) : (
                  <Skeleton className="h-8 w-[200px] -full" />
                )}
              </div>
            </div>
            {!sem_email && (
              <>
                {email ? (
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">E-Mail</Label>
                      <Input disabled={true} id="email" value={email} />
                    </div>
                  </div>
                ) : (
                  <Skeleton className="h-8 w-[200px] -full" />
                )}
              </>
            )}

            {!sem_matricula && (
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="matricula">Matrícula</Label>
                  {matricula ? (
                    <Input disabled={true} id="matricula" value={matricula} />
                  ) : (
                    <Skeleton className="h-8 w-[200px] -full" />
                  )}
                </div>
              </div>
            )}

            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  disabled={true}
                  id="senha"
                  type="password"
                  placeholder="*****"
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
