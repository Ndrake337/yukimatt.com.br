import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-black flex flex-row items-center lg:px-64 py-6 max-lg:sticky">
      <Link
        href="/"
        className="flex flex-row gap-6 items-center ml-10 select-none"
      >
        <Image
          width="0"
          height="0"
          className="w-24 h-24 max-lg:w-16"
          src="/logo.svg"
          alt="Logo Do Site"
        />
        <span className="font-megrim text-4xl max-lg:text-3xl select-none">
          Yuki Matt
        </span>
      </Link>
      <menu className="font-confortaa flex flex-row ml-auto mr-10 gap-6 max-lg:hidden flex-wrap">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contato">Contato</Link>
      </menu>
    </header>
  );
}
