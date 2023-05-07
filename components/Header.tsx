import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-black flex flex-row items-center px-64 py-6">
      <Link
        href="/"
        className="flex flex-row gap-6 items-center ml-10 select-none"
      >
        <Image
          width="0"
          height="0"
          className="w-24 h-24"
          src="/logo.svg"
          alt="Logo Do Site"
        />
        <span className="font-megrim text-4xl select-none">Yuki Matt</span>
      </Link>
      <menu className="font-confortaa flex flex-row ml-auto mr-10 gap-6">
        <Link href="/">Home</Link>
        <Link href="/">Portfólio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/">Contato</Link>
      </menu>
    </header>
  );
}
