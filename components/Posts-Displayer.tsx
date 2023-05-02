import Image from "next/image";

export function PostsDisplayer() {
  return (
    <div className="flex flex-row gap-7 w-full ">
      <Image
        src="/Big-Thumbnail.png"
        alt="Thumb"
        width="0"
        height="0"
        className="w-full h-full rounded-xl"
      />
      <div className="flex flex-col gap-4 w-1/3">
        <Image
          width="0"
          height="0"
          className="w-fit h-full rounded-xl"
          src="/Big-Thumbnail.png"
          alt="Thumb"
        />
        <Image
          width="0"
          height="0"
          className="w-fit h-full rounded-xl"
          src="/Big-Thumbnail.png"
          alt="Thumb"
        />
        <Image
          width="0"
          height="0"
          className="w-fit h-full rounded-xl"
          src="/Big-Thumbnail.png"
          alt="Thumb"
        />
      </div>
    </div>
  );
}
