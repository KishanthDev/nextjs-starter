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

// Custom Divider Component
const Divider = () => (
  <hr className="my-2 border-t border-gray-200 dark:border-gray-700" />
);

export const UserDropdown = () => (
  <Dropdown placement="bottom-end">
    <NavbarItem className="bg-transparent p-0">
      {" "}
      {/* Prevent unwanted styling */}
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          color="secondary"
          size="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
    </NavbarItem>
    <DropdownMenu
      aria-label="User menu actions"
      className="w-64 rounded-lg bg-white p-2 shadow-xl dark:bg-zinc-900"
    >
      <DropdownItem key="profile" className="h-16">
        <User
          name="Signed in as"
          description="zoey@example.com"
          classNames={{
            name: "font-bold text-base",
            description: "font-medium text-sm text-default-500",
          }}
        />
      </DropdownItem>
      <DropdownItem key="divider1" className="p-0" textValue="divider">
        <Divider />
      </DropdownItem>
      <DropdownItem
        key="settings"
        className="text-base hover:bg-gray-100 dark:hover:bg-zinc-800"
      >
        My Settings
      </DropdownItem>
      <DropdownItem
        key="team_settings"
        className="text-base hover:bg-gray-100 dark:hover:bg-zinc-800"
      >
        Team Settings
      </DropdownItem>
      <DropdownItem key="divider2" className="p-0" textValue="divider">
        <Divider />
      </DropdownItem>
      <DropdownItem
        key="analytics"
        className="text-base hover:bg-gray-100 dark:hover:bg-zinc-800"
      >
        Analytics
      </DropdownItem>
      <DropdownItem
        key="system"
        className="text-base hover:bg-gray-100 dark:hover:bg-zinc-800"
      >
        System
      </DropdownItem>
      <DropdownItem key="divider3" className="p-0" textValue="divider">
        <Divider />
      </DropdownItem>
      <DropdownItem
        key="configurations"
        className="text-base hover:bg-gray-100 dark:hover:bg-zinc-800"
      >
        Configurations
      </DropdownItem>
      <DropdownItem
        key="help_and_feedback"
        className="text-base hover:bg-gray-100 dark:hover:bg-zinc-800"
      >
        Help & Feedback
      </DropdownItem>
      <DropdownItem key="divider4" className="p-0" textValue="divider">
        <Divider />
      </DropdownItem>
      <DropdownItem
        key="logout"
        className="text-base text-danger hover:bg-gray-100 dark:hover:bg-zinc-800"
        color="danger"
      >
        Log Out
      </DropdownItem>
      <DropdownItem key="divider5" className="p-0" textValue="divider">
        <Divider />
      </DropdownItem>
      <DropdownItem
        key="switch"
        className="text-base hover:bg-gray-100 dark:hover:bg-zinc-800"
      >
        <DarkModeSwitch />
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
