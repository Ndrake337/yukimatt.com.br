import Image from "next/image";
import Link from "next/link";
import { BreakIn } from "./Break-in";

export function Footer() {
  return (
    <footer className="flex flex-col">
      <BreakIn />
      <div className="flex flex-row items-center justify-around mb-7">
        <Link
          href="/"
          className="flex flex-row gap-6 items-center ml-10 select-none"
        >
          <img src="/logo-fill.svg" />
        </Link>
        <menu className="font-confortaa flex flex-row ml-auto mr-10 gap-6">
          <Link href="/">Contato</Link>
          <Link
            href="https://github.com/Ndrake337/yukimatt.com.br/"
            target="_blank"
          >
            Github
          </Link>
          <Link href="/blog">Termos de Uso</Link>
        </menu>
      </div>
    </footer>
  );
}
