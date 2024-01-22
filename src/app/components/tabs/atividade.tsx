"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiActivity } from "react-icons/fi";
import { TabsContent } from "@/components/ui/tabs";
import { MdDateRange } from "react-icons/md";

export function Atividade() {
  return (
    <TabsContent
      value="atividade"
      className="overflow-y-auto mt-0 w-full h-full"
    >
      <Card className="w-full px-6 overflow-y-scroll rounded-none h-full border-2">
        <CardHeader>
          <CardTitle>Atividade</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-start gap-4">
                <FiActivity size={25} />
                Sua senha foi alterada
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              Você alterou sua senha
            </CardContent>
            <CardFooter className="gap-2 text-sm text-gray-700">
              <MdDateRange size={22} />
              21/09/2021 - 19:01
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-start gap-4">
                <FiActivity size={25} />
                Você curtiu uma publicação
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <p>
                Você curtiu a publicação de <strong>Ronald Souza</strong> no
                Fórum
              </p>
            </CardContent>
            <CardFooter className="gap-2 text-sm text-gray-700">
              <MdDateRange size={22} />
              21/09/2021 - 19:01
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-start gap-4">
                <FiActivity size={25} />
                Você curtiu uma publicação
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <p>
                Você curtiu a publicação de <strong>Albert Reis</strong> no
                Fórum
              </p>
            </CardContent>
            <CardFooter className="gap-2 text-sm text-gray-700">
              <MdDateRange size={22} />
              21/09/2021 - 14:21
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-start gap-4">
                <FiActivity size={25} />
                Você curtiu uma publicação
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <p>
                Você curtiu a publicação de <strong>Selma Carvalho</strong> no
                Fórum
              </p>
            </CardContent>
            <CardFooter className="gap-2 text-sm text-gray-700">
              <MdDateRange size={22} />
              21/09/2021 - 12:21
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-start gap-4">
                <FiActivity size={25} />
                Você fez uma publicação no fórum
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <p>
                Minha experiência como desenvolvedor me ensinou que tudo é
                relativo a quanto você se esforça...
              </p>
            </CardContent>
            <CardFooter className="gap-2 text-sm text-gray-700">
              <MdDateRange size={22} />
              21/09/2021 - 17:44
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
