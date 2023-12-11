"use client";
import { useEffect } from "react";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { getGithubReadMeContent } from "../utils/getRepoReadMe";

export function About() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const readMeContent = await getGithubReadMeContent("Ndrake337");
        setContent(readMeContent);
      } catch (error) {
        console.error("Erro ao obter conteúdo do GitHub:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-row gap-20 items-start py-8 max-xl:flex-col">
      <img
        alt="Minha Foto"
        src="https://avatars.githubusercontent.com/u/58128082?v=4"
        className="rounded-full"
      />
      <p className="flex flex-col gap-7">
        <strong>Hello there, General Keno..., *cof cof*</strong>
        {content ? (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        ) : (
          "Await"
        )}
      </p>
    </div>
  );
}
