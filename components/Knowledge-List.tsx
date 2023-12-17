import { KnowledgeBase } from "../assets/Know-Techs";
import { KnowledgeLabel } from "./Knowledge-Label";

export function KnowledgeList() {
  function generatePageContent() {
    return KnowledgeBase.map((item) => {
      return (
        <>
          <strong>{item.title}</strong>
          <div className="flex flex-row flex-wrap gap-3 ">
            {item.items.map((skill) => {
              return <KnowledgeLabel name={skill.name} link={skill.iconLink} />;
            })}
          </div>
        </>
      );
    });
  }
  return <div className="flex flex-col gap-3">{generatePageContent()}</div>;
}
