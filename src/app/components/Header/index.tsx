
import { Logo } from "@/app/assets/Logo";
import { Menu } from "lucide-react";
import { IconButton } from "../Button/Icon-Button";
import * as Dialog from '@radix-ui/react-dialog';
import { Division } from "../Division";
import Link from "next/link";

export function Header() {

  return (
    <div className="bg-white flex justify-center items-center px-8 border-b-2 border-zinc-500 shadow-sm w-screen">
      <div></div>
      <Link href="/"><Logo /></Link>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="absolute right-4">
            <IconButton variant="normal">
              <Menu />
            </IconButton>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-zinc-900/40 data-[state=open]:animate-overlayShow fixed inset-0">
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 bg-zinc-200 border border-zinc-900 p-4  rounded-lg">
              <Dialog.Title className="p-2">Selecione para onde quer ir: </Dialog.Title>
              <Division />
              <div className="flex flex-col mt-1">
                <Dialog.Close asChild>
                  <Link href="/" className="p-2 hover:bg-zinc-400/20 rounded-lg">Home</Link>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Link href="/Portfolio" className="p-2 hover:bg-zinc-400/20 rounded-lg">Portfolio</Link>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Link href="/Blog" className="p-2 hover:bg-zinc-400/20 rounded-lg">Blog</Link>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button className="text-zinc-500 absolute top-3 right-3 inline-flex h-6 w-6 items-center justify-center rounded-full" aria-label="Close">
                  X
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
