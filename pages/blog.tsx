import { BreakIn } from "../components/Break-in";
import { Footer } from "../components/Footer";
import { PostsDisplayer } from "../components/Posts-Displayer";

export default function Blog() {
  return (
    <main className="flex flex-col items-center py-8 gap-7 shadow-body-shadow">
      <strong className="text-3xl">
        Bem Vindo(a) ... Veja nossos mais novos posts:
      </strong>
      <PostsDisplayer />
      <div className="flex flex-col gap-1 items-center">
        <span className="italic">Ver Mais Posts</span>
        <img className="w-fit h-full" src="/DownIcon.svg" alt="Thumb" />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
