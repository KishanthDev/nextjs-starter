interface WrapperLayoutProps {
  collapsed: boolean;
  children: React.ReactNode;
}

export const WrapperLayout = ({ collapsed, children }: WrapperLayoutProps) => {
  return (
    <div className={`transition-all duration-300 ease-in-out ${collapsed ? "ml-20" : "ml-64"}`}>
      {children}
    </div>
  );
};
