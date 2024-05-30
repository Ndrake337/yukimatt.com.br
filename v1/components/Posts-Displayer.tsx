import Image from "next/image";
import { postList } from "../samples/posts/get-all-posts";
import { PostsBanner } from "./Post-Banner";
import Link from "next/link";

function filterHighlightedPosts() {
  postList.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  const highlights = postList.slice(0, 4).map((item) => {
    const { _id, title, ImageUrl } = item;
    return { _id, title, ImageUrl };
  });
  return highlights;
}

export function PostsDisplayer() {
  const highlightedPosts = filterHighlightedPosts();

  return (
    <div className="flex flex-row gap-7">
      <a href={`/blog/${highlightedPosts[0]._id}`} className="p-0 m-0">
        <PostsBanner
          key={highlightedPosts[0]._id}
          id={highlightedPosts[0]._id}
          banner={highlightedPosts[0].ImageUrl}
          title={highlightedPosts[0].title}
        />
      </a>
      <div className="flex flex-col gap-7 w-1/3">
        <PostsBanner
          key={highlightedPosts[1]._id}
          id={highlightedPosts[1]._id}
          banner={highlightedPosts[1].ImageUrl}
          title={highlightedPosts[1].title}
        />
        <PostsBanner
          key={highlightedPosts[2]._id}
          id={highlightedPosts[2]._id}
          banner={highlightedPosts[2].ImageUrl}
          title={highlightedPosts[2].title}
        />
        <PostsBanner
          key={highlightedPosts[3]._id}
          id={highlightedPosts[3]._id}
          banner={highlightedPosts[3].ImageUrl}
          title={highlightedPosts[3].title}
        />
      </div>
    </div>
  );
}
