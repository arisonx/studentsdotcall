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

export function DiretorForm() {
  const formDiretorSchema = z.object({
    email: z.string().min(2, {
      message: "email precisa ter no mínimo 2 caracteres.",
    }),
    nome: z.string().min(2, {
      message: "nome precisa ter no mínimo 2 caracteres.",
    }),
    token: z.string().min(2, {
      message: "token precisa ter no mínimo 2 caracteres.",
    }),
    senha: z.string().min(2, {
      message: "senha precisa ter no mínimo 2 caracteres.",
    }),
  });

  const formDiretor = useForm<z.infer<typeof formDiretorSchema>>({
    resolver: zodResolver(formDiretorSchema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      token: "",
    },
  });

  function onSubmit(values: z.infer<typeof formDiretorSchema>) {
    console.log(values);
  }

  return (
    <TabsContent value="diretor">
      <Card>
        <CardHeader>
          <CardTitle>Diretor</CardTitle>
          <CardDescription>
            <strong>Crie</strong> uma <strong>conta</strong> para acessar a
            plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...formDiretor}>
            <form
              onSubmit={formDiretor.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={formDiretor.control}
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
                control={formDiretor.control}
                name="token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token</FormLabel>
                    <FormControl>
                      <Input placeholder="informe seu token" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formDiretor.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail Institucional</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="informe seu e-mail institucional"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formDiretor.control}
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
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
