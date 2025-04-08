"use client"; // For client-side hooks

import {
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { GithubIcon } from "../icons/navbar/github-icon";
import { SearchIcon } from "../icons/search-icon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        className="w-full justify-between border-b-1 border-border py-4"
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Left Side: Icons with increased gap */}
        <NavbarContent className="flex gap-6">
          <NotificationsDropdown /> {/* No NavbarItem wrapper */}
          <NavbarItem>
            <Link href="https://github.com/" target="_blank">
              <GithubIcon />
            </Link>
          </NavbarItem>
          <UserDropdown /> {/* No NavbarItem wrapper */}
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarContent className="md:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Burger Button for Desktop */}
        <NavbarContent className="hidden md:flex">
          <BurguerButton />
        </NavbarContent>

        {/* Search Input for Mobile */}
        <NavbarContent className="w-full md:hidden">
          <Input
            isClearable
            startContent={
              <SearchIcon
                className="text-accents6"
                size={16}
                fill="currentColor"
              />
            }
            classNames={{
              inputWrapper: "w-full transition-all duration-200",
              input: "text-small",
            }}
            placeholder="Search..."
          />
        </NavbarContent>

        <NavbarContent justify="end">
          {/* Add items here if needed */}
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
