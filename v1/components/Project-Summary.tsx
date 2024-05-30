import Link from "next/link";
import { iProjectSummary } from "../interfaces/iProjectSummary";

export function ProjectSummary(props: iProjectSummary) {
  return (
    <div className="basis-80 flex flex-row lg:overflow-hidden max-lg:border max-lg:rounded-lg items-center max-lg:flex-col">
      <img
        src={`https://raw.githubusercontent.com/Ndrake337/${props.repo.name}/main/YKM/Banner.png`}
        className="w-2/5 xl:w-2/4 h-fit rounded-lg items-center max-lg:w-full"
      />
      <div className="flex flex-col p-7 gap-7">
        <strong className="text-xl font-bold">{props.repo.name}</strong>
        <span className="text-sm line-clamp-3">{props.repo.description}</span>
        <span className="w-fit text-xs px-3 border rounded-full">
          {props.repo.language}
        </span>
        <Link
          href={{
            pathname: `/portfolio/${props.repo.name}`,
          }}
        >
          <span className="flex justify-end">...Ler Mais</span>
        </Link>
      </div>
    </div>
  );
}
