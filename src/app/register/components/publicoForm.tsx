"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function PublicoForm() {
  const router = useRouter();

  const [loading, setLOading] = useState(false);

  const formPublicoSchema = z.object({
    nome: z.string().min(2, {
      message: "nome precisa ter no mínimo 2 caracteres.",
    }),
    email: z.string().min(2, {
      message: "email precisa ter no mínimo 2 caracteres.",
    }),
    senha: z.string().min(2, {
      message: "senha precisa ter no mínimo 2 caracteres.",
    }),
  });

  const formPublico = useForm<z.infer<typeof formPublicoSchema>>({
    resolver: zodResolver(formPublicoSchema),
    defaultValues: {
      email: "",
      nome: "",
      senha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formPublicoSchema>) {
    setLOading(true);
  }
  return (
    <TabsContent value="publico">
      <Card>
        <CardHeader>
          <CardTitle>Público</CardTitle>
          <CardDescription>
            <strong>Crie</strong> uma <strong>conta</strong> para acessar a
            plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...formPublico}>
            <form
              onSubmit={formPublico.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={formPublico.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="informe seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formPublico.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="informe seu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formPublico.control}
                name="senha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="informe sa senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-10 items-center">
                {loading === true ? (
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    espere...
                  </Button>
                ) : (
                  <>
                    <Button type="submit" className="px-10">
                      Registrar
                    </Button>
                    <Link
                      className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                      href="/"
                    >
                      Já tenho uma conta
                      <IoIosArrowRoundForward />
                    </Link>
                  </>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
