import Head from "next/head";
import "../styles/global.css";
import { Comfortaa, Megrim } from "next/font/google";
import { Header } from "../components/Header";

const confortaa = Comfortaa({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-comfortaa",
});

const megrim = Megrim({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-megrim",
});

export default function YukiMatt({ Component, pageProps }) {
  return (
    <div
      className={`${confortaa.variable} ${megrim.variable} bg-dark-gray text-light-gray`}
    >
      <Head>
        <title>Yuki Matt</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
