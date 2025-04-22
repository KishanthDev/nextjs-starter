"use client";
import React from "react";
import { SidebarItem } from "./sidebar-item";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MessageCircle,LayoutDashboard,TableOfContents } from "lucide-react";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {collapsed && (
        <div
          className="fixed inset-0 z-10 bg-black/30 dark:bg-black/50 md:hidden"
          onClick={setCollapsed}
        />
      )}
      <aside
        className={`
    transition-all duration-300 ease-in-out
    ${collapsed ? "w-0 md:w-20" : "w-full md:w-44"}
    ${isDark ? "bg-black text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}
    border-r overflow-hidden h-auto md:h-auto
  `}
      >
        <div className="flex min-h-screen flex-col">
          <div className="flex-1 overflow-y-auto transition-all p-4 space-y-6">

            <SidebarItem
              title={collapsed ? "" : "Dashboard"}
              icon={<LayoutDashboard />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarItem
              isActive={pathname === "/content"}
              title={collapsed ? "" : "Content"}
              icon={<TableOfContents />}
              href="/content"
            />
            <SidebarItem
              isActive={pathname === "/chats"}
              title={collapsed ? "" : "Chats"}
              icon={<MessageCircle/>}
              href="/chats"
            />
          </div>
        </div>
      </aside>
    </>
  );
};
