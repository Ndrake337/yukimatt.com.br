export function PostsBanner() {
  return (
    <div className="w-full relative">
      <img src="/Big-Thumbnail.jpg" className="rounded-xl h-full" />
      <div>
        <span className="absolute bottom-0 left-0 right-0 pb-8 pl-8 break-words">
          Titulo do post
        </span>
      </div>
    </div>
  );
}
