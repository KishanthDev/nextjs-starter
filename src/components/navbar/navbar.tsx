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

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

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
    <Box className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full border-b-1 border-border py-4"
        isMenuOpen={collapsed}
        onMenuOpenChange={setCollapsed}
      >
        {/* Left Side: Burger Menu for Mobile */}
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>

        {/* Right Side: Icons for all screen sizes */}
        <NavbarContent justify="end" className="flex gap-6">
          <NotificationsDropdown />
          <NavbarItem>
            <Link href="https://github.com/" target="_blank">
              <GithubIcon />
            </Link>
          </NavbarItem>
          <UserDropdown />
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu>
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
                className="w-full"
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
