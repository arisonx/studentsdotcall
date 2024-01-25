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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ProfessorForm() {
  const router = useRouter();
  const [loading, setLOading] = useState(false);

  const formProfessorSchema = z.object({
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

  const formAluno = useForm<z.infer<typeof formProfessorSchema>>({
    resolver: zodResolver(formProfessorSchema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      token: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formProfessorSchema>) {
    setLOading(true);
    try {
      const createProf = await fetch("/api/user/create/professor", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (createProf.status === 201) {
        const id = await createProf.text();
        console.log(id);
        router.push("/dashboard/professor/" + id);
        setLOading(false);
      }
    } catch (err) {
      setLOading(false);
      console.log(err);
      alert("ocorreu um erro");
    }
  }

  return (
    <TabsContent value="professor">
      <Card>
        <CardHeader>
          <CardTitle>Professor</CardTitle>
          <CardDescription>
            <strong>Crie</strong> uma <strong>conta</strong> para acessar a
            plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...formAluno}>
            <form
              onSubmit={formAluno.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={formAluno.control}
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
                control={formAluno.control}
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
                control={formAluno.control}
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
                control={formAluno.control}
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
