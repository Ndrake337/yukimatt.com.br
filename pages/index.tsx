import { About } from "../components/About";
import { BreakIn } from "../components/Break-in";
import { Footer } from "../components/Footer";

export default function SobreMim() {
  return (
    <main className="flex flex-col gap-7">
      <strong className="text-2xl mt-7 text-center">
        Seja Bem-vendo(a) ao Yuki Matt, Minha página pessoal na internet
      </strong>
      <About />
      <Footer />
    </main>
  );
}
