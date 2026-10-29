import { ReactNode } from "react";

export default function Inner({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return <div>{children}</div>;
}
