import { iKnowledge } from "../interfaces/iKnowledgeLabel";

export function KnowledgeLabel(props: iKnowledge) {
  return (
    <div className="flex flex-row rounded-lg bg-[#353535] p-7 w-fit items-center jus basis-48 gap-3">
      <img src={props.link} className="w-1/6" />
      <span>{props.name}</span>
    </div>
  );
}
