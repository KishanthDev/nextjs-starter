"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Divider = () => (
  <hr className="my-2 border-t border-gray-200 dark:border-gray-700" />
);

const statusOptions = [
  { label: "Online", color: "bg-green-500" },
  { label: "Away", color: "bg-yellow-400" },
  { label: "Busy", color: "bg-red-500" },
  { label: "Invisible", color: "bg-gray-400" },
];

export const UserDropdown = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <button
          type="button"
          aria-haspopup="true"
          aria-label="User menu"
          className="relative cursor-pointer rounded-full bg-transparent p-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <Avatar
            isBordered
            as="span"
            color="secondary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt=""
            className={`ring-2 ${isDark ? "ring-gray-600" : "ring-gray-300"}`}
          />
          {/* Status dot indicator */}
          <span
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-zinc-900 ${selectedStatus.color}`}
          />
        </button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="User menu actions"
        className={`w-64 rounded-lg p-2 shadow-xl ${isDark ? "bg-zinc-900 text-white" : "bg-white text-black"}`}
      >
        <DropdownItem key="profile" className="h-16">
          <User
            name="Signed in as"
            description="zoey@example.com"
            classNames={{
              name: `font-bold text-base ${isDark ? "text-white" : "text-black"}`,
              description: `font-medium text-sm ${isDark ? "text-gray-400" : "text-default-500"}`,
            }}
          />
        </DropdownItem>

        <DropdownItem key="divider-1" className="p-0" aria-hidden="true">
          <Divider />
        </DropdownItem>

        <DropdownItem
          key="settings"
          className={`text-base ${isDark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-100"}`}
        >
          My Profile
        </DropdownItem>

        {/* Status submenu */}
        <DropdownItem key="status" className="group relative text-base">
          <div className="flex items-center justify-between">
            <span className={`${isDark ? "text-white" : "text-black"}`}>Status</span>
            <svg
              className="ml-2 h-3 w-3 transition-transform group-hover:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div
            className={`absolute right-full top-0 z-50 hidden w-40 rounded-lg p-2 shadow-xl group-hover:block ${isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
              }`}
          >
            {statusOptions.map(({ label, color }) => (
              <div
                key={label}
                onClick={() => setSelectedStatus({ label, color })}
                className={`flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm hover:${isDark ? "bg-zinc-800" : "bg-gray-100"
                  }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                {label}
              </div>
            ))}
          </div>
        </DropdownItem>

        <DropdownItem key="divider-2" className="p-0" aria-hidden="true">
          <Divider />
        </DropdownItem>

        <DropdownItem
          key="logout"
          className={`text-base ${isDark ? "text-red-400 hover:bg-zinc-800" : "text-danger hover:bg-gray-100"}`}
          color="danger"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
