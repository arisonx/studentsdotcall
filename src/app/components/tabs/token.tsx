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
import { MdOutlineGeneratingTokens } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export function Token() {
  const generateToken = () => {};

  return (
    <TabsContent value="token" className="mt-0 w-full h-full">
      <Card className="w-full rounded-none h-full border-2 px-6">
        <CardHeader>
          <CardTitle>Token</CardTitle>
          <CardDescription>
            Gere um token para que um aluno consiga registrar-se na plataforma
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <Popover>
            <PopoverTrigger>
              <Button className="flex gap-3">
                Gerar Token
                <MdOutlineGeneratingTokens size={18} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-100 flex gap-2 items-center h-auto mx-12">
              Token Gerado:
              <Badge variant="secondary" className="p-4">
                <strong>kwboe2382h3u2b382hx8o3k02j</strong>
              </Badge>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
