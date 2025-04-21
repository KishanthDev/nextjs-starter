"use client";
import React from "react";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

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
        ${collapsed ? "w-20" : "w-64"}
        ${isDark ? "bg-black text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}
        border-r`}
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto transition-all p-4 space-y-6">
            <SidebarItem
              title={collapsed ? "" : "Collapse"}
              icon={<span className="text-xl">{collapsed ? ">" : "<"}</span>}
              onClick={setCollapsed}
            />

            <SidebarItem
              title={collapsed ? "" : "Dashboard"}
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />

              <SidebarItem
                isActive={pathname === "/accounts"}
                title={collapsed ? "" : "Accounts"}
                icon={<AccountsIcon />}
                href="/accounts"
              />
              <SidebarItem
                isActive={pathname === "/payments"}
                title={collapsed ? "" : "Payments"}
                icon={<PaymentsIcon />}
                href="/payments"
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title={collapsed ? "" : "Customers"}
                icon={<CustomersIcon />}
                href="/customers"
              />
              <SidebarItem
                isActive={pathname === "/products"}
                title={collapsed ? "" : "Products"}
                icon={<ProductsIcon />}
                href="/products"
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title={collapsed ? "" : "Reports"}
                icon={<ReportsIcon />}
                href="/reports"
              />
          </div>
        </div>
      </aside>
    </>
  );
};
