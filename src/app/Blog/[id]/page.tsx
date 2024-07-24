"use client";
import { useEffect, useState } from "react";

interface Blog {}

export default function Post() {
  const [top, setTop] = useState(288);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Define o valor de top, decrescendo de 72 até 0 conforme o scroll
      const newTop = Math.max(288 - scrollTop, 0);

      setTop(newTop < 112 ? 112 : newTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article className="-mt-8 h-screen w-full">
      <div className="absolute left-0 h-96 w-full bg-slate-600" />

      <main
        className={`shadow-top relative -mx-8 mt-4 h-screen rounded-t-2xl bg-white p-4 ${top <= 112 ? "overflow-scroll" : ""} space-y-2`}
        style={{ top: `${top}px` }}
      >
        {/* header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Titulo do Post</h1>
          <h2 className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam.
          </h2>
          <h3 className="text-sm font-light">
            Por: Matheus Felipe | Publicado em: 2024-07-23
          </h3>
        </div>
        {/* conteúdo */}
        <div className="mt-1 space-y-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            nostrum obcaecati, sint culpa molestiae officiis nulla eligendi
            ipsum recusandae voluptas! Atque deleniti quam fugiat esse ex odio
            excepturi odit magnam?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            nostrum obcaecati, sint culpa molestiae officiis nulla eligendi
            ipsum recusandae voluptas! Atque deleniti quam fugiat esse ex odio
            excepturi odit magnam?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            nostrum obcaecati, sint culpa molestiae officiis nulla eligendi
            ipsum recusandae voluptas! Atque deleniti quam fugiat esse ex odio
            excepturi odit magnam?
          </p>
        </div>
        {/* final CTA */}
        <div className="flex items-center justify-between pt-4">
          <span>Previous Post</span> | <span>Blog Home</span> |{" "}
          <span>Next Post</span>
        </div>
      </main>
    </article>
  );
}
