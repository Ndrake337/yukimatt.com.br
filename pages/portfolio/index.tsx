import { Footer } from "../../components/Footer";
import { ProjectSummary } from "../../components/Project-Summary";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Portfolio() {
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

      <div className="flex flex-row flex-wrap gap-7 w-full justify-center">
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>

      <Footer />
    </main>
  );
}
