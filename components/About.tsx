export function About() {
  return (
    <div className="flex flex-row gap-20 items-center py-8">
      <img alt="Minha Foto" src="/Picture.png" className="w-96 h-96" />
      <p className="flex flex-col gap-9">
        <strong className="text-2xl">
          Hi there 👋, My name is Matheus Felipe
        </strong>
        <span className="text-xl">
          I'm a student of Computer Engineering in the 8th semester of 10 at
          SENAC, like 90% of the coders, I'm just a nerd guy that starts code
          because likes computer and games.
        </span>
      </p>
    </div>
  );
}
