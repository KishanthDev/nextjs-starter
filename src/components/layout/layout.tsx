"use client";
import React from "react";
import { useLockedBody } from "../hooks/useBodyLock";
import { NavbarWrapper } from "../navbar/navbar";
import { SidebarWrapper } from "../sidebar/SideBar";
import { SidebarContext } from "./layout-context";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [, setLocked] = useLockedBody(false);
  const [mounted, setMounted] = React.useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => {
      const next = !prev;

      if (window.innerWidth < 768) {
        setLocked(next);
      } else {
        setLocked(false);
      }

      return next;
    });
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SidebarContext.Provider
      value={{
        collapsed: !sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <div className="flex flex-col min-h-screen w-full">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <NavbarWrapper>
            <div></div>
          </NavbarWrapper>
        </div>

        {/* Main content and sidebar */}
        <div className="flex flex-1 pt-[53px]">
          <div
            className={`fixed left-0 z-50 transition-all duration-300 ease-in-out ${sidebarOpen ? "w-50" : "w-20"
              }`}
          >
            <SidebarWrapper />
          </div>

          {/* Main content */}
          <main
            className={`transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-44" : "ml-20"
              } flex-1 overflow-auto`}
          >
            {children}
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};
