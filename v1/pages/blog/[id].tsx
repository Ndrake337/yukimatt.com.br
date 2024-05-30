import { Footer } from "../../components/Footer";
import { post } from "../../samples/posts/get-single-post";

export default function Posts() {
  return (
    <main className="flex flex-col gap-7 px-0">
      <div className="w-full h-96 bg-blend-overlay relative">
        <img src="/Big-Thumbnail.jpg" className="w-full h-full object-cover" />
        <strong className="text-2xl absolute bottom-0 left-0 right-0 pb-8 pl-24">
          {post.title}
        </strong>
      </div>
      <div className="flex flex-col px-24 gap-7">
        <p>{post.content}</p>
        <Footer />
      </div>
    </main>
  );
}
