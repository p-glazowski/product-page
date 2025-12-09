import type { ReactNode } from "react";

interface InfoContainerProps {
  children: ReactNode;
}

export default function InfoContainer({ children }: InfoContainerProps) {
  return <div className="flex flex-col gap-4 p-5">{children}</div>;
}
