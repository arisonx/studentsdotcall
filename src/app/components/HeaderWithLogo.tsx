import Image from "next/image";

interface IHeaderDescription {
  text: string;
}

export function HeaderWithLogo({ text }: IHeaderDescription) {
  return (
    <header className="w-full flex gap-4 pb-4 flex-col items-center justify-center pt-10">
      <Image src="/logo.png" alt="logo" width={210} height={210} />
      <h2 className="text-center font-medium text-xl text-blue-950">
        {text}
      </h2>
    </header>
  );
}
