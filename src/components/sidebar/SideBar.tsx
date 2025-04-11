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
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-white transition-transform duration-300 ease-in-out dark:bg-black xl:static ${collapsed ? "translate-x-0" : "-translate-x-full"} xl:z-0 xl:translate-x-0`}
      >
        <div
          className={`flex h-full w-64 flex-col border-r ${
            isDark
              ? "border-gray-700 bg-black text-white"
              : "border-gray-200 bg-white text-gray-900"
          } ${collapsed ? "translate-x-0" : "-translate-x-full xl:translate-x-0"} xl:fixed xl:left-0 xl:top-0 xl:h-screen`}
        >
          <div
            className={`border-b p-4 ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <CompaniesDropdown />
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto scrollbar-hide">
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
                  href="/accounts"
                />
                <SidebarItem
                  isActive={pathname === "/payments"}
                  title="Payments"
                  icon={<PaymentsIcon />}
                  href="/payments"
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
                  href="/customers"
                />
                <SidebarItem
                  isActive={pathname === "/products"}
                  title="Products"
                  icon={<ProductsIcon />}
                  href="/products"
                />
                <SidebarItem
                  isActive={pathname === "/reports"}
                  title="Reports"
                  icon={<ReportsIcon />}
                  href="/reports"
                />
              </SidebarMenu>

              <SidebarMenu title="General">
                <SidebarItem
                  isActive={pathname === "/developers"}
                  title="Developers"
                  icon={<DevIcon />}
                  href="/developers"
                />
                <SidebarItem
                  isActive={pathname === "/view"}
                  title="View Test Data"
                  icon={<ViewIcon />}
                  href="/view"
                />
                <SidebarItem
                  isActive={pathname === "/settings"}
                  title="Settings"
                  icon={<SettingsIcon />}
                  href="/settings"
                />
              </SidebarMenu>

              <SidebarMenu title="Updates">
                <SidebarItem
                  isActive={pathname === "/changelog"}
                  title="Changelog"
                  icon={<ChangeLogIcon />}
                  href="/changelog"
                />
              </SidebarMenu>
            </div>

            <div
              className={`flex justify-center gap-6 border-t p-4 ${
                isDark ? "border-gray-700 bg-black" : "border-gray-200 bg-white"
              }`}
            >
              <Tooltip content="Settings" placement="top">
                <button
                  aria-label="Settings Button"
                  className={`${
                    isDark
                      ? "text-gray-300 hover:text-gray-100"
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
                    isDark
                      ? "text-gray-300 hover:text-gray-100"
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
                  className={`cursor-pointer ring-2 ${
                    isDark ? "ring-gray-600" : "ring-gray-300"
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
