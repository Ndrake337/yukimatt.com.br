
import { Logo } from "@/app/assets/Logo";
import { Menu } from "lucide-react";
import { IconButton } from "../Button/Icon-Button";
import * as Dialog from '@radix-ui/react-dialog';
import { Division } from "../Division";
import Link from "next/link";

export function Header() {

  return (
    <div className="flex w-screen items-center justify-center border-b-2 border-zinc-500 bg-white px-8 shadow-sm dark:bg-zinc-900 dark:text-zinc-200">
      <div></div>
      <Link href="/">
        <Logo />
      </Link>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="absolute right-4">
            <IconButton variant="normal">
              <Menu />
            </IconButton>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-zinc-900/40 dark:bg-zinc-100/5">
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-900 bg-zinc-200 p-4 dark:border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200">
              <Dialog.Title className="p-2">
                Selecione para onde quer ir:{" "}
              </Dialog.Title>
              <Division />
              <div className="mt-1 flex flex-col">
                <Dialog.Close asChild>
                  <Link
                    href="/"
                    className="rounded-lg p-2 hover:bg-zinc-400/20"
                  >
                    Home
                  </Link>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Link
                    href="/Portfolio"
                    className="rounded-lg p-2 hover:bg-zinc-400/20"
                  >
                    Portfolio
                  </Link>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Link
                    href="/Blog"
                    className="rounded-lg p-2 hover:bg-zinc-400/20"
                  >
                    Blog
                  </Link>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button
                  className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-zinc-500"
                  aria-label="Close"
                >
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
