"use client";
import React from "react";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SidebarItem } from "./sidebar-item";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, SquareMenu } from "lucide-react"

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
        className={`fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out
        ${collapsed ? "w-0 md:w-20" : "w-full md:w-64"}
        ${isDark ? "bg-black text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}
        border-r overflow-hidden`}
      >

        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto transition-all p-4 space-y-6">
            {/* Only show on desktop */}
            <div className="hidden md:block">
              <SidebarItem
                title={collapsed ? "" : "Chat App"}
                icon={<span className="text-xl">{collapsed ? <Menu /> : <SquareMenu />}</span>}
                onClick={setCollapsed}
              />
            </div>


            <SidebarItem
              title={collapsed ? "" : "Dashboard"}
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />

            <SidebarItem
              isActive={pathname === "/form"}
              title={collapsed ? "" : "Forms"}
              icon={<AccountsIcon />}
              href="/form"
            />
            <SidebarItem
              isActive={pathname === "/content"}
              title={collapsed ? "" : "Content"}
              icon={<PaymentsIcon />}
              href="/content"
            />
            <SidebarItem
              isActive={pathname === "/chats"}
              title={collapsed ? "" : "Chats"}
              icon={<CustomersIcon />}
              href="/chats"
            />
            <SidebarItem
              isActive={pathname === "/comments"}
              title={collapsed ? "" : "Comments"}
              icon={<ProductsIcon />}
              href="/comments"
            />
            <SidebarItem
              isActive={pathname === "/analytics"}
              title={collapsed ? "" : "Analytics"}
              icon={<ReportsIcon />}
              href="/analytics"
            />
          </div>
        </div>
      </aside>
    </>
  );
};
