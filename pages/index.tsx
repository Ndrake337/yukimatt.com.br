import { About } from "../components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 w-full">
      <div className=" bg-cover-pattern w-full h-screen">
        <About />
      </div>
    </div>
  );
}
