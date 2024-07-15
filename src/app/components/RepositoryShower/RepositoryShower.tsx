import { Tags } from './Tags';

export interface RepositoryShowerProps {
  title: string | undefined;
  description: string | undefined;
  tech: string | undefined
}

export function RepositoryShower({title, description, tech}: RepositoryShowerProps){
  return (
    <div>
        <img src={`https://raw.githubusercontent.com/Ndrake337/${title}/main/YKM/Banner.png`} className="rounded-lg shadow-md" />
        <div className="flex flex-1 flex-col gap-4">
          <h2>{title?.replaceAll('-',' ')}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <Tags>{tech}</Tags>

            <a className="rounded-full border-2 border-zinc-500 p-1.5" href={`https://github.com/Ndrake337/${title}`} target="_blank">Ler Mais</a>
          </div>
        </div>
    </div>
  )
}
