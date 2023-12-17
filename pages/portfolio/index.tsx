import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { ProjectSummary } from "../../components/Project-Summary";
import GitHubIcon from "@mui/icons-material/GitHub";
import Axios from "axios";
import { iGitHubRepos } from "../../interfaces/iGitHubRepos";

export default function Portfolio() {
  const [githubRepos, setGithubRepos] = useState<iGitHubRepos[]>();

  const getGithubRepos = () => {
    const gitHubReposURL = "https://api.github.com/users/Ndrake337/repos";

    Axios.get(gitHubReposURL).then((result) => {
      const repos = result.data;
      const sortedRepos = repos.sort((a, b) => {
        return (
          new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf()
        );
      });
      console.log(sortedRepos);
      const filteredRepos = sortedRepos.map((item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          html_url: item.html_url,
          url: item.url,
          language: item.language,
        };
      });

      setGithubRepos(filteredRepos);
    });
  };

  useEffect(() => {
    getGithubRepos();
  }, []);

  const generatePageContent = () => {
    return githubRepos?.map((repo) => {
      return <ProjectSummary key={repo.id} repo={repo} />;
    });
  };

  return (
    <main className="flex flex-col gap-7 max-md:mx-0 ">
      <div className="flex justify-center mt-7 items-center">
        <strong className="text-xl">
          Todos os projetos mostrados abaixo tem seu codigo disponivel em:{" "}
          <a href="https://github.com/Ndrake337">
            <GitHubIcon className="pb-1" />
            /Ndrake337
          </a>
        </strong>
      </div>

      <div className="flex flex-col flex-wrap gap-7 w-full justify-center">
        {generatePageContent()}
      </div>

      <Footer />
    </main>
  );
}
