"use client";

import { Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { GithubIcon } from "../icons/navbar/github-icon";
import { Box } from "../styles/box";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "./darkmodeswitch";
import FullScreenToggle from "./FullScreenToggle";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
        isMenuOpen={false} // Disable default menu since sidebar handles navigation
      >
        {/* Left Side: Burger Icon */}
        <NavbarContent justify="start" className="block xl:hidden">
          <BurguerButton />
        </NavbarContent>

        {/* Right Side: Other Icons */}
        <NavbarContent justify="end">
          <ul className="m-0 flex list-none items-center gap-2 p-0 sm:gap-4">
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
            <li>
              <DarkModeSwitch />
            </li>
            <li>
              <FullScreenToggle />
            </li>
            <UserDropdown />
          </ul>
        </NavbarContent>
      </Navbar>
      {children}
    </Box>
  );
};
