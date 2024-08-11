import { ContentWrapper } from "../assets/components/ContentWrapper";
import { Category } from "../assets/components/Category";
import { categories } from "../assets/categories";

interface PortfolioProps {}

export default function Blog() {
  return (
    <ContentWrapper>
      <div className="flex flex-row flex-wrap gap-3 lg:w-full">
        {categories.map((category) => {
          return (
            <Category name={category.name} key={category.name}>
              {<category.icon />}
            </Category>
          );
        })}
      </div>
      <div className="relative mb-4 cursor-pointer rounded-t-lg bg-zinc-50 shadow-lg dark:bg-zinc-700 lg:flex lg:flex-row">
        <span className="absolute left-3 top-4 rounded-full bg-zinc-50 px-3 py-1 shadow-md dark:bg-zinc-700">
          Filmes e Séries
        </span>
        <img
          src="https://i.pinimg.com/originals/70/06/e0/7006e0d0d1c53bf5fbbe8d7cbd6f1b8a.jpg"
          alt="teste"
          className="rounded-inherit lg:w-2/4"
        />
        <div className="flex flex-col gap-1 p-4">
          <strong>title</strong>
          <span>a short description of the post</span>
        </div>
      </div>
    </ContentWrapper>
  );
}
