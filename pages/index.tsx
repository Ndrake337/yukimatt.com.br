import { About } from "../components/About";
import { BreakIn } from "../components/Break-in";
import { Footer } from "../components/Footer";

export default function SobreMim() {
  return (
    <main className="flex flex-col gap-7 max-md:mx-0">
      <strong className="text-2xl mt-7 text-center">
        Seja Bem-vindo(a) ao Yuki Matt, Minha página pessoal na internet
      </strong>
      <About />
      <Footer />
    </main>
  );
}
