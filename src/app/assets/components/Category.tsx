import { SquareTerminal } from "lucide-react";
import { ReactNode } from "react";

interface CategoryProps {
  children: ReactNode;
  name: string;
}

export function Category({ children, name }: CategoryProps) {
  return (
    <div className="flex min-h-20 w-full grow basis-32 flex-col items-center rounded-lg bg-slate-500/20 p-4 shadow-lg">
      {children}
      <span>{name}</span>
    </div>
  );
}
