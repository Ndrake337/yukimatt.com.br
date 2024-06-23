import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return <span className="text-2xl font-rajdhani font-medium">{children}</span>;
}
