import React from "react";
import { Box } from "../styles/box"; // Assuming you have this helper

export const SidebarWrapper = ({ collapsed }: { collapsed: boolean }) => (
  <div
    className={`z-202 fixed flex h-full w-64 transform flex-col overflow-y-auto border-r border-border bg-background px-6 py-10 transition-transform duration-200 md:static md:flex md:h-screen md:translate-x-0 ${collapsed ? "translate-x-0" : "-translate-x-full"}`}
  ></div>
);

export const Overlay = () => (
  <div className="z-201 fixed inset-0 bg-black bg-opacity-30 opacity-80 transition-opacity duration-300 md:z-auto md:hidden md:opacity-100" />
);

export const Header = () => (
  <div className="flex items-center gap-8 px-10"></div>
);

export const Body = () => (
  <div className="mt-13 flex flex-col gap-10 px-4"></div>
);

export const Footer = () => (
  <div className="pt-18 flex items-center justify-center gap-12 px-8 pb-8 md:pb-0 md:pt-0"></div>
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
