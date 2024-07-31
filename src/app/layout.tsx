import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./assets/components/Header";
import { Footer } from "./assets/components/Footer";

export const metadata: Metadata = {
  title: "Yuki Matt",
  description:
    "Portfólio Web e Blog de Matheus Felipe Neves Campos Cardoso, Programador.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon-light.png",
        href: "/images/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon-dark.png",
        href: "/images/icon-dark.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="grid h-screen w-screen grid-rows-app font-roboto font-normal text-zinc-500 antialiased dark:text-zinc-200">
          <Header />
          <main className="w-screen bg-zinc-100 px-8 pt-4 dark:bg-zinc-800">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
