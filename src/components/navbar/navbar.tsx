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

  const baseBtnClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800";

  return (
    <Box
      className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <Navbar
        isBordered
        className={`relative w-full border-b py-4 xl:py-8 ${
          isDark
            ? "border-gray-700 bg-black text-white"
            : "border-border bg-white text-black"
        }`}
        isMenuOpen={false}
      >
        {/* Left Side: Burger Icon (mobile) */}
        <NavbarContent justify="start" className="block xl:hidden">
          <BurguerButton />
        </NavbarContent>

        {/* Right Side: All icons (mobile/tablet) */}
        <NavbarContent justify="end" className="block xl:hidden">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={baseBtnClass}>
              <DarkModeSwitch />
            </div>
            <div className={baseBtnClass}>
              <FullScreenToggle />
            </div>
            <UserDropdown />
          </div>
        </NavbarContent>


        {/* DESKTOP: Right Top - DarkMode, Fullscreen, User */}
        <div className="absolute right-4 top-1/2 z-50 hidden -translate-y-1/2 items-center gap-4 xl:flex">
          <div className={baseBtnClass}>
            <DarkModeSwitch />
          </div>
          <div className={baseBtnClass}>
            <FullScreenToggle />
          </div>
          <UserDropdown />
        </div>
      </Navbar>

      {children}
    </Box>
  );
};
