import { iPostsBanner } from "../interfaces/iPostSummary";

export function PostsBanner(props: iPostsBanner) {
  return (
    <div className="w-full h-full relative">
      <img src={`${props.banner}`} className="rounded-xl h-full" />
      <div>
        <span className="absolute bottom-0 left-0 right-0 pb-8 pl-8 break-words">
          {props.title}
        </span>
      </div>
    </div>
  );
}
