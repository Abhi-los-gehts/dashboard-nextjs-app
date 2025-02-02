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

        <div className="flex gap-4 items-center flex-col sm:flex-row ">
        
          <a
            className="rounded-full border border-solid border-black/[1] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 "
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More about Nextjs.
          </a>
        </div>
      </main>

      {/* footer section */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Ridvan and Abhilasha </p>
        </aside>
      </footer>


    </div>
  );
}
