import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from 'next-themes'
import "@/styles/globals.css";

export const metadata = {
  openGraph: {
    title: "This plant does not exist",
    url: "https://plant.vmartens.de/",
    images: [
      {
        url: "https://plant.vmartens.de/_next/image?url=%2Fimages%2F00018-2713224236.png&w=640&q=75",
        width: 512,
        height: 512,
      },
    ],
  },
  robots: {
    index: true,
  },
  title: "This plant does not exist",
  description: "AI generated plants",
  applicationName: "PlantGenerator",
  authors: [{ name: "Vincent Martens", url: "https://vmartens.de/" }],
  creator: "Vincent Martens",
  publisher: "Vincent Martens",
  twitter: {
    card: "summary_large_image",
    title: "This plant does not exist",
    description: "AI generated plants",
    creator: "@vmartensHH",
    images: [
      "https://plant.vmartens.de/_next/image?url=%2Fimages%2F00018-2713224236.png&w=640&q=75",
    ],
  },
  manifest: 'https://nextjs.org/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <div className="min-h-screen mx-auto max-w-5xl flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 text-gray-900 dark:text-gray-100">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
