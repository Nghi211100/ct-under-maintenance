import SwitchLocale from "@/components/SwitchLocale";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
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
        <div className="flex relative items-center justify-center md:justify-between h-16 shadow">
          <div className="max-w-full px-2 md:px-10">
            <Image src="/images/logo.png" alt="logo" width="157" height="32" />
          </div>
        </div>
        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-3 pb-28">
          <Image src={"/images/404.svg"} alt="404" width="600" height="400" />
          <div className="max-w-5xl">
            <p className="md:text-4xl text-3xl text-center font-bold">
              {t("title")}
            </p>
            <p className="text-[#6B7280] text-sm md:text-base text-center pt-2.5">
              {t("content")}
            </p>
            <p className="text-[#6B7280] text-sm md:text-base text-center pt-2.5">
              {t("content01")}
            </p>
            <p className="text-[#6B7280] text-sm md:text-base text-center pt-2.5">
              {t("content02")}
            </p>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 right-28 h-max">
        <SwitchLocale />
      </footer>
    </>
  );
}

