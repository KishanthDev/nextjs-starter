import React from "react";
import { Box } from "../styles/box"; // Assuming you have this helper

export const SidebarWrapper = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div
      className={`bg-background fixed h-full w-64 overflow-y-auto transform transition-transform duration-200 z-202 flex flex-col py-10 px-6 border-r border-border md:flex md:static md:h-screen md:translate-x-0 ${collapsed ? "translate-x-0" : "-translate-x-full"}`}
    >
    </div>
  );
};

export const Overlay = () => (
  <div
    className="fixed inset-0 bg-black bg-opacity-30 z-201 transition-opacity duration-300 opacity-80 md:hidden md:z-auto md:opacity-100"
  />
);

export const Header = () => (
  <div className="flex gap-8 items-center px-10">
  </div>
);

export const Body = () => (
  <div className="flex flex-col gap-10 mt-13 px-4">
  </div>
);

export const Footer = () => (
  <div className="flex items-center justify-center gap-12 pt-18 pb-8 md:pt-0 md:pb-0 px-8">
  </div>
);

export const Sidebar = ({ collapsed }: { collapsed: boolean }) => (
  <div>
    <SidebarWrapper collapsed={collapsed} />
    <Header />
    <Body />
    <Footer />
    <Overlay />
  </div>
);
