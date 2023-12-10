"use client";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function About() {
  const [content, setContent] = useState("");

  const getGithubReadMeContent = () => {
    const gitHubReadMeURL =
      "https://api.github.com/repos/Ndrake337/Ndrake337/readme";

    Axios.get(gitHubReadMeURL).then((result) => {
      const readMeContent = Buffer.from(result.data.content, "base64").toString(
        "utf8"
      );
      setContent(readMeContent);
    });
  };

  useEffect(() => {
    getGithubReadMeContent();
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
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </p>
    </div>
  );
}
