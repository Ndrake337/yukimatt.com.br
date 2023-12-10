export function ProjectSummary() {
  return (
    <div className="basis-80 flex flex-col border-solid border rounded-lg overflow-hidden">
      <img
        src="https://cdn.wallpapersafari.com/0/17/FH80mY.jpg"
        className="w-full"
      />
      <div className="flex flex-col p-7">
        <strong>title</strong>
        <span>resume</span>
        <a href="/portfolio/123456789">
          <span className="flex justify-end">...readMore</span>
        </a>
      </div>
    </div>
  );
}
