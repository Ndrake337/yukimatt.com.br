import { About } from "../components/About";
import { BreakIn } from "../components/Break-in";
import { Footer } from "../components/Footer";
import { KnowledgeList } from "../components/Knowledge-List";

export default function SobreMim() {
  return (
    <main className="flex flex-col gap-7 max-md:mx-0">
      <strong className="text-2xl mt-7 text-center">
        Seja Bem-vindo(a) ao Yuki Matt, Minha página pessoal na internet
      </strong>
      <About />
      <BreakIn />
      <div className="flex flex-col items-center justify-center gap-7">
        <strong className="text-2xl">Principais Tecnologias</strong>

        <KnowledgeList />
      </div>

      <Footer />
    </main>
  );
}
