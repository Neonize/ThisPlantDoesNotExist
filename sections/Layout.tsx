import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Nextjs-Dev Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dark:text-gray-100 text-gray-900 min-h-screen mx-auto max-w-5xl flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
