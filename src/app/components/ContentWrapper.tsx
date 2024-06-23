import { ComponentProps, ReactNode } from "react";

interface ContentWrapperProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className="flex flex-col items-center gap-4">{children}</div>;
}
