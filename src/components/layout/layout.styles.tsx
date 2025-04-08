import { ReactNode } from "react";

export const WrapperLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex">{children}</div>
);
