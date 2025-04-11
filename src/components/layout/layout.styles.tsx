// layout.styles.tsx
import { ReactNode } from "react";

export const WrapperLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen w-full overflow-x-hidden">{children}</div>
);
