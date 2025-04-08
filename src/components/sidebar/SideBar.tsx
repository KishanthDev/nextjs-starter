"use client";
import React from "react";
import { Avatar } from "@heroui/react";
import { Tooltip } from "@heroui/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  const { theme } = useTheme(); // Get the current theme from next-themes

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {collapsed && (
        <div
          className="fixed inset-0 z-10 bg-black/30 dark:bg-black/50 md:hidden"
          onClick={setCollapsed}
        />
      )}

      <aside
        className={`h-screen transition-all duration-200 ${
          collapsed ? "w-64" : "w-0 md:w-64"
        } ${collapsed ? "z-20" : "z-0"} md:z-0`}
      >
        <div
          className={`flex h-full w-64 flex-col border-r ${
            theme === "dark"
              ? "border-gray-700 bg-black text-white"
              : "border-gray-200 bg-white text-gray-900"
          } ${collapsed ? "translate-x-0" : "-translate-x-full md:translate-x-0"} md:fixed md:left-0 md:top-0 md:h-screen`}
        >
          <div
            className={`border-b p-4 ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <CompaniesDropdown />
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto">
            <div className="space-y-6 p-4">
              <SidebarItem
                title="Home"
                icon={<HomeIcon />}
                isActive={pathname === "/"}
                href="/"
              />

              <SidebarMenu title="Main Menu">
                <SidebarItem
                  isActive={pathname === "/accounts"}
                  title="Accounts"
                  icon={<AccountsIcon />}
                  href="accounts"
                />
                <SidebarItem
                  isActive={pathname === "/payments"}
                  title="Payments"
                  icon={<PaymentsIcon />}
                />
                <CollapseItems
                  icon={<BalanceIcon />}
                  items={["Banks Accounts", "Credit Cards", "Loans"]}
                  title="Balances"
                />
                <SidebarItem
                  isActive={pathname === "/customers"}
                  title="Customers"
                  icon={<CustomersIcon />}
                />
                <SidebarItem
                  isActive={pathname === "/products"}
                  title="Products"
                  icon={<ProductsIcon />}
                />
                <SidebarItem
                  isActive={pathname === "/reports"}
                  title="Reports"
                  icon={<ReportsIcon />}
                />
              </SidebarMenu>

              <SidebarMenu title="General">
                <SidebarItem
                  isActive={pathname === "/developers"}
                  title="Developers"
                  icon={<DevIcon />}
                />
                <SidebarItem
                  isActive={pathname === "/view"}
                  title="View Test Data"
                  icon={<ViewIcon />}
                />
                <SidebarItem
                  isActive={pathname === "/settings"}
                  title="Settings"
                  icon={<SettingsIcon />}
                />
              </SidebarMenu>

              <SidebarMenu title="Updates">
                <SidebarItem
                  isActive={pathname === "/changelog"}
                  title="Changelog"
                  icon={<ChangeLogIcon />}
                />
              </SidebarMenu>
            </div>

            <div
              className={`flex justify-center gap-6 border-t p-4 ${
                theme === "dark"
                  ? "border-gray-700 bg-black"
                  : "border-gray-200 bg-white"
              }`}
            >
              <Tooltip content="Settings" placement="top">
                <button
                  aria-label="Settings Button"
                  className={`${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <SettingsIcon />
                </button>
              </Tooltip>
              <Tooltip content="Adjustments" placement="top">
                <button
                  aria-label="Adjustments Button"
                  className={`${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <FilterIcon />
                </button>
              </Tooltip>
              <Tooltip content="Profile" placement="top">
                <Avatar
                  aria-label="Profile Button"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  size="sm"
                  className={`cursor-pointer ${
                    theme === "dark" ? "ring-gray-600" : "ring-gray-300"
                  }`}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
