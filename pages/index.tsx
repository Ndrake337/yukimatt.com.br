import { About } from "../components/About";
import { BreakIn } from "../components/Break-in";
import { Footer } from "../components/Footer";
import { TechTopics } from "../components/Tech-List";
import { KnowledgeBase } from "../assets/Know-Techs";

function listSkills() {
  const skills = KnowledgeBase.map((item) => {
    console.log(item.title);

    return item.title;
  });

  const pagecontent = skills.map((skill) => {
    return <TechTopics props={skill} />;
  });
  console.log(pagecontent);

  return pagecontent;
}

export default function SobreMim() {
  return (
    <main className="flex flex-col gap-7 max-md:mx-0">
      <strong className="text-2xl mt-7 text-center">
        Seja Bem-vindo(a) ao Yuki Matt, Minha página pessoal na internet
      </strong>
      <About />
      <BreakIn />
      <div className="flex flex-col items-center justify-center gap-7">
        <strong className="text-2xl">Principais Conhecimentos</strong>
        <div className="grid grid-cols-2 gap-7">{listSkills()}</div>
      </div>

      <Footer />
    </main>
  );
}
