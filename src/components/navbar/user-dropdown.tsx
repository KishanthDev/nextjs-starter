"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
  User,
} from "@nextui-org/react";
import React from "react";
import { useTheme } from "next-themes";

const Divider = () => (
  <hr className="my-2 border-t border-gray-200 dark:border-gray-700" />
);

export const UserDropdown = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Dropdown placement="bottom-end">
      <NavbarItem className="bg-transparent p-0">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            color="secondary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            className={`ring-2 ${isDark ? "ring-gray-600" : "ring-gray-300"}`}
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        className={`w-64 rounded-lg p-2 shadow-xl ${isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
          }`}
      >
        <DropdownItem key="profile" className="h-16">
          <User
            name="Signed in as"
            description="zoey@example.com"
            classNames={{
              name: `font-bold text-base ${isDark ? "text-white" : "text-black"}`,
              description: `font-medium text-sm ${isDark ? "text-gray-400" : "text-default-500"
                }`,
            }}
          />
        </DropdownItem>
        <DropdownItem key="divider1" className="p-0" aria-hidden="true">
          <Divider />
        </DropdownItem>
        <DropdownItem
          key="settings"
          className={`text-base ${isDark
              ? "text-white hover:bg-zinc-800"
              : "text-black hover:bg-gray-100"
            }`}
        >
          My Settings
        </DropdownItem>
        <DropdownItem
          key="team_settings"
          className={`text-base ${isDark
              ? "text-white hover:bg-zinc-800"
              : "text-black hover:bg-gray-100"
            }`}
        >
          Team Settings
        </DropdownItem>
        <DropdownItem key="divider2" className="p-0" textValue="divider">
          <Divider />
        </DropdownItem>
        <DropdownItem
          key="analytics"
          className={`text-base ${isDark
              ? "text-white hover:bg-zinc-800"
              : "text-black hover:bg-gray-100"
            }`}
        >
          Analytics
        </DropdownItem>
        <DropdownItem
          key="system"
          className={`text-base ${isDark
              ? "text-white hover:bg-zinc-800"
              : "text-black hover:bg-gray-100"
            }`}
        >
          System
        </DropdownItem>
        <DropdownItem key="divider3" className="p-0" textValue="divider">
          <Divider />
        </DropdownItem>
        <DropdownItem
          key="configurations"
          className={`text-base ${isDark
              ? "text-white hover:bg-zinc-800"
              : "text-black hover:bg-gray-100"
            }`}
        >
          Configurations
        </DropdownItem>
        <DropdownItem
          key="help_and_feedback"
          className={`text-base ${isDark
              ? "text-white hover:bg-zinc-800"
              : "text-black hover:bg-gray-100"
            }`}
        >
          Help & Feedback
        </DropdownItem>
        <DropdownItem key="divider4" className="p-0" textValue="divider">
          <Divider />
        </DropdownItem>
        <DropdownItem
          key="logout"
          className={`text-base ${isDark
              ? "text-red-400 hover:bg-zinc-800"
              : "text-danger hover:bg-gray-100"
            }`}
          color="danger"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};