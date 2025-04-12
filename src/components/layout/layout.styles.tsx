// layout.styles.tsx
import { ReactNode } from "react";

export const WrapperLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen w-full overflow-x-hidden pl-0 xl:pl-64">
    {children}
  </div>
);
