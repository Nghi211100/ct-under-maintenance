import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/612a4a45d6e7610a49b27458/1fe6j486i";
    document.head.appendChild(s1);
  });
  return (
    <>
      <Head>
        <title>Coinstrat</title>
        <meta
          name="description"
          content="Our website is currently undergoing maintenance. Please come back later."
        />
      </Head>
      <main className="h-screen">
        <div className="flex relative items-center justify-between h-16 shadow">
          <div className="max-w-full px-2 md:px-10">
            <Image
              src="/images/logo.svg"
              alt="logo"
              className="w-auto"
              width="157"
              height="32"
            />
          </div>
        </div>
        <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center">
          <Image src={"/images/404.png"} alt="404" width="600" height="400" />
          <p className="text-[#6B7280] text-lg">
            Oops! Our website is currently undergoing maintenance. Please come
            back later.
          </p>
        </div>
      </main>
    </>
  );
}

