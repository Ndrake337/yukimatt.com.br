import { useRouter } from "next/router";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { getGithubReadMeContent } from "../../utils/getRepoReadMe";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Projects() {
  const [repoReadMe, setRepoReadMe] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const repoName = router.query.id;
      const fetchData = async () => {
        try {
          const readMeContent = await getGithubReadMeContent(repoName);
          setRepoReadMe(readMeContent);
        } catch (error) {
          console.error("Erro ao obter conteúdo do GitHub:", error);
        }
      };

      fetchData();
    }
  }, [router.isReady]);
  return (
    <main className="flex flex-col gap-7 max-md:mx-0 ">
      <div className="flex flex-col gap-7 mt-7">
        {repoReadMe ? <ReactMarkdown>{repoReadMe}</ReactMarkdown> : "Await"}
      </div>
      <Footer />
    </main>
  );
}
