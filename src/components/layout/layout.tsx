"use client";

import React from "react";
import { useLockedBody } from "../hooks/useBodyLock";
import { NavbarWrapper } from "../navbar/navbar";
import { SidebarWrapper } from "../sidebar/SideBar";
import { SidebarContext } from "./layout-context";
import { WrapperLayout } from "./layout.styles";
import { useTheme } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, systemTheme } = useTheme();

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => {
      const next = !prev;
      setLocked(next);
      return next;
    });
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <WrapperLayout>
        <SidebarWrapper />
        <div className="flex min-h-screen w-full flex-1 flex-col overflow-hidden">
          <NavbarWrapper>{children}</NavbarWrapper>
        </div>
      </WrapperLayout>
    </SidebarContext.Provider>
  );
};