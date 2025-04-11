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
import { DarkModeSwitch } from "./darkmodeswitch";
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
        {/* Add proper list structure */}
        <ul className="list-none p-0 m-0">
          <li>
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
          </li>
          <li>
            <DropdownItem key="divider1" className="p-0">
              <Divider />
            </DropdownItem>
          </li>
          {/* Repeat for other items */}
        </ul>
      </DropdownMenu>
    </Dropdown>
  );
};