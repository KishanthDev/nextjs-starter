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
import DarkModeSwitch from "./darkmodeswitch";

export const UserDropdown = () => (
  <Dropdown placement="bottom-end">
    <NavbarItem>
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
      /*     onAction={(key: Key) => {
                    const actionKey = String(key);
                    console.log({ actionKey });
                }}      */
    >
      <DropdownItem key="profile" className="h-14">
        <User
          name="Signed in as"
          description="zoey@example.com"
          classNames={{
            name: "font-bold",
            description: "font-bold",
          }}
        />
      </DropdownItem>
      <DropdownItem key="settings" showDivider>
        My Settings
      </DropdownItem>
      <DropdownItem key="team_settings">Team Settings</DropdownItem>
      <DropdownItem key="analytics" showDivider>
        Analytics
      </DropdownItem>
      <DropdownItem key="system">System</DropdownItem>
      <DropdownItem key="configurations">Configurations</DropdownItem>
      <DropdownItem key="help_and_feedback" showDivider>
        Help & Feedback
      </DropdownItem>
      <DropdownItem
        key="logout"
        showDivider
        className="text-danger"
        color="danger"
      >
        Log Out
      </DropdownItem>
      <DropdownItem key="switch" showDivider>
        <DarkModeSwitch />
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
