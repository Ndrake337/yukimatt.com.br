import Header from "../components/Header";
import PostsDisplayer from "../components/Posts-Displayer";

function Home() {
  return (
    <main className="flex flex-col items-center py-8 gap-7 shadow-body-shadow">
      <strong className="text-3xl">
        Bem Vindo(a) ... Veja nossos mais novos posts:
      </strong>
      <PostsDisplayer />
    </main>
  );
}

export default Home;
