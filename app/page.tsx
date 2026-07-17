import Image from "next/image";

export default function Home() {
  return (
     <main className="flex h-screen w-screen items-center justify-center bg-black">
      <Image
        src="/under-construction.png"
        alt="Site under construction"
        fill
        className="object-contain"
        priority
      />
    </main>
  );
}
