import Image from "next/image";
import { postList } from "../samples/posts/get-all-posts";
import { PostsBanner } from "./Post-Banner";

function filterHighlightedPosts() {
  postList.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  const highlights = postList.slice(0, 3);
  return highlights;
}

export function PostsDisplayer() {
  return (
    <div className="flex flex-row gap-7">
      <PostsBanner />
      <div className="flex flex-col gap-4 w-1/3">
        <PostsBanner />
        <PostsBanner />
        <PostsBanner />
      </div>
    </div>
  );
}
