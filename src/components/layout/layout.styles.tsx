interface WrapperLayoutProps {
  collapsed: boolean;
  children: React.ReactNode;
}

export const WrapperLayout = ({ collapsed, children }: WrapperLayoutProps) => (
  <div
    className={`transition-all duration-300 ease-in-out ${
      collapsed ? "md:ml-20" : "md:ml-64"
    }`}
  >
    {children}
  </div>
);
