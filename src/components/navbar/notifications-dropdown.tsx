import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { NotificationIcon } from "../icons/navbar/notification-icon";

export const NotificationsDropdown = () => (
  <Dropdown placement="bottom-end">
    <DropdownTrigger>
      <NavbarItem>
        <NotificationIcon /> {/* Larger gray icon */}
      </NavbarItem>
    </DropdownTrigger>
    <DropdownMenu
      aria-label="Notifications"
      classNames={{
        base: "w-[340px] bg-white", // Added bg-white
        list: "py-0",
      }}
    >
      <DropdownSection
        title="Notifications"
        classNames={{
          heading: "text-sm font-semibold px-4 py-2",
          group: "p-0",
          divider: "mt-0",
        }}
      >
        <DropdownItem
          key="1"
          classNames={{
            base: "py-4 gap-3",
            title: "font-semibold",
            description: "text-sm font-normal",
          }}
          description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
          startContent={<span className="text-lg">📣</span>}
        >
          Edit your information
        </DropdownItem>
        <DropdownItem
          key="2"
          classNames={{
            base: "py-4 gap-3",
            title: "font-semibold",
            description: "text-sm font-normal",
          }}
          description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
          startContent={<span className="text-lg">🚀</span>}
        >
          Say goodbye to paper receipts!
        </DropdownItem>
        <DropdownItem
          key="3"
          classNames={{
            base: "py-4 gap-3",
            title: "font-semibold",
            description: "text-sm font-normal",
          }}
          description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
          startContent={<span className="text-lg">📣</span>}
        >
          Edit your information
        </DropdownItem>
      </DropdownSection>
    </DropdownMenu>
  </Dropdown>
);
