import { Tags } from './Tags';

export interface RepositoryShowerProps {
  title: string | undefined;
  description: string | undefined;
  tech: string | undefined
}

export function RepositoryShower({title, description, tech}: RepositoryShowerProps){
  return (
    <div className="flex flex-col justify-items-stretch gap-8 lg:grid lg:max-h-80 lg:max-w-[1200px] lg:grid-cols-2 lg:py-5">
      <img
        src={`https://raw.githubusercontent.com/Ndrake337/${title}/main/YKM/Banner.png`}
        className="rounded-lg shadow-md w-fit"
      />
      <div className="flex flex-1 flex-col gap-4">
        <strong className="mt-4 text-lg lg:text-2xl">
          {title?.replaceAll("-", " ")}
        </strong>
        <p>{description}</p>
        <div className="flex justify-between">
          <Tags>{tech}</Tags>

          <a
            className="rounded-full border-2 border-zinc-500 p-1.5 dark:border-zinc-200"
            href={`https://github.com/Ndrake337/${title}`}
            target="_blank"
          >
            Ler Mais
          </a>
        </div>
      </div>
    </div>
  );
}
