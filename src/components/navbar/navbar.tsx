"use client";

import { Link, Navbar, NavbarContent, NavbarMenu } from "@nextui-org/react";
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
      className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ${isDark ? "bg-black" : "bg-white"}`}
    >
      <Navbar
        isBordered
        className={`w-full border-b py-4 ${isDark ? "border-gray-700 bg-black text-white" : "border-border bg-white text-black"}`}
        isMenuOpen={collapsed}
        onMenuOpenChange={setCollapsed}
      >
        {/* Left Side: Notifications and GitHub */}
        <NavbarContent justify="start">
          <ul className="m-0 flex list-none gap-4 p-0">
            {/* Remove <li> around NotificationsDropdown */}
            <NotificationsDropdown />
            <li>
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={isDark ? "text-white" : "text-black"}
                aria-label="Visit our GitHub page (opens in new tab)"
              >
                <GithubIcon />
                <span className="sr-only">GitHub</span>
              </Link>
            </li>
          </ul>
        </NavbarContent>

        {/* Right Side: Dark Mode, Fullscreen, User, Burger */}
        <NavbarContent justify="end">
          <ul className="m-0 flex list-none items-center gap-4 p-0">
            <li>
              <DarkModeSwitch />
            </li>
            <li>
              <FullScreenToggle />
            </li>
            {/* Remove <li> around UserDropdown */}
            <UserDropdown />
            <li className="md:hidden">
              <BurguerButton />
            </li>
          </ul>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu
          className={isDark ? "bg-black text-white" : "bg-white text-black"}
        >
          <ul className="m-0 list-none p-0">
            {menuItems.map((item, index) => (
              <li key={item} className="w-full">
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
              </li>
            ))}
          </ul>
        </NavbarMenu>
      </Navbar>
      {children}
    </Box>
  );
};
