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
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

interface professor {
  email: string;
  nome: String;
  id: string;
}

export function ProfessorLoginForm() {
  const router = useRouter();

  const [loading, setLOading] = useState(false);

  const formProfessorSchema = z.object({
    email: z.string().min(2, {
      message: "email precisa ter no mínimo 2 caracteres.",
    }),
    senha: z.string().min(2, {
      message: "senha precisa ter no mínimo 2 caracteres.",
    }),
  });

  const formAluno = useForm<z.infer<typeof formProfessorSchema>>({
    resolver: zodResolver(formProfessorSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formProfessorSchema>) {
    setLOading(true);
    try {
      const response = await fetch("/api/user/loginprofessor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        const { id }: professor = await response.json();
        setLOading(!loading);
        router.push("/dashboard/professor/" + id);
        formAluno.reset();
      }
    } catch (err) {
      alert("email ou senha incorretos!");
    }
  }

  return (
    <TabsContent value="professor">
      <Card>
        <CardHeader>
          <CardTitle>Aluno</CardTitle>
          <CardDescription>
            Entre na sua conta como <strong>aluno</strong> para interagir,
            visualizar e postar conteúdos.
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail Institucional</FormLabel>
                    <FormControl>
                      <Input placeholder="informe seu e-mail" {...field} />
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
                      <Input placeholder="informe sua senha" {...field} />
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
                      Entrar
                    </Button>
                    <Link
                      className="flex items-center font-light text-[1rem] gap-1 border-b-[1px] border-b-blue-950 text-blueborder-b-blue-950"
                      href="/register"
                    >
                      Não tenho uma conta
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
