"use client";

import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import React from "react";
import { GithubIcon } from "../icons/navbar/github-icon";
import { Box } from "../styles/box";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { useSidebarContext } from "../layout/layout-context";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "./darkmodeswitch";
import FullScreenToggle from "./FullScreenToggle";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Box
      className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <Navbar
        isBordered
        className={`w-full border-b py-4 ${
          isDark
            ? "border-gray-700 bg-black text-white"
            : "border-border bg-white text-black"
        }`}
        isMenuOpen={collapsed}
        onMenuOpenChange={setCollapsed}
      >
        {/* Left Side: Notifications and GitHub */}
        <NavbarContent justify="start" className="gap-4">
          <NotificationsDropdown />
          <NavbarItem>
            <Link
              href="https://github.com/"
              target="_blank"
              className={isDark ? "text-white" : "text-black"}
            >
              <GithubIcon />
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right Side: Dark Mode, Fullscreen, User, Burger (Mobile) */}
        <NavbarContent justify="end" className="items-center gap-4">
          <DarkModeSwitch />
          <FullScreenToggle />
          <UserDropdown />
          {/* Only visible on mobile */}
          <div className="md:hidden">
            <BurguerButton />
          </div>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu
          className={isDark ? "bg-black text-white" : "bg-white text-black"}
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item}>
              <Link
                color={
                  index === menuItems.length - 1
                    ? "danger"
                    : index === 2
                      ? "secondary"
                      : "foreground"
                }
                className={`w-full ${isDark ? "text-white" : "text-black"}`}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {children}
    </Box>
  );
};
