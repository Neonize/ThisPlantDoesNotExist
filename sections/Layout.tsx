import HeadElement from "@/sections/HeadElement";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <HeadElement
        title="This plant does not exist"
        description="AI generated plants"
      />

      <div className="min-h-screen mx-auto max-w-5xl flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
