import { flagPrecomputed, precomputedFlags } from "@/lib/flags";

export const generateStaticParams = () => [];

export default async function Home({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  console.log("==> Code:", code);
  const precomputed = await flagPrecomputed(code, precomputedFlags);
  return (
    <div
      className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ${
        precomputed ? "bg-green-400" : "bg-blue-400"
      }`}
    >
      HELLO WORLD
    </div>
  );
}
