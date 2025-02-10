import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* header section */}
      <header>
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <h1> Experience the Power of an Interactive Dashboard with Next.js</h1>

       
      </main>

    </div>
  );
}
