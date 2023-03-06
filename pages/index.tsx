import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coinstrat</title>
        <meta
          name="description"
          content="Our website is currently undergoing maintenance. Please check back later."
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
        <div className="h-[calc(100vh-64px)] flex items-center justify-center">
          <Image src={"/images/404.png"} alt="404" width="600" height="400" />
        </div>
      </main>
    </>
  );
}

