import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="w-screen h-screen flex gap-6 flex-row items-center">
      <Skeleton className="w-[120px] h-full" />
      <div className="flex flex-1 h-full flex-col px-4 gap-6">
        <Skeleton className="w-full h-[190px]" />
        <Skeleton className="w-full h-[190px]" />
        <Skeleton className="w-full h-[190px]" />
        <Skeleton className="w-full h-[190px]" />
        <Skeleton className="w-full h-[190px]" />
      </div>
    </section>
  );
}
