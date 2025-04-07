"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acme-logo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "Acme Co.",
    location: "Palo Alto, CA",
    logo: <AcmeIcon />,
  });

  return (
    <Dropdown placement="bottom-end" className="font-medium">
      <DropdownTrigger>
        <Box className="cursor-pointer">
          <Flex align="center" className="gap-6">
            {company.logo}
            <Box>
              <h3 className="-mb-1 text-lg font-medium leading-5 text-zinc-700 dark:text-zinc-200">
                {company.name}
              </h3>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {company.location}
              </span>
            </Box>
            <BottomIcon />
          </Flex>
        </Box>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Select Company"
        onAction={(key) => {
          switch (key) {
            case "1":
              setCompany({
                name: "Facebook",
                location: "San Francisco, CA",
                logo: <AcmeIcon />,
              });
              break;
            case "2":
              setCompany({
                name: "Instagram",
                location: "Austin, TX",
                logo: <AcmeLogo />,
              });
              break;
            case "3":
              setCompany({
                name: "Twitter",
                location: "Brooklyn, NY",
                logo: <AcmeIcon />,
              });
              break;
            case "4":
              setCompany({
                name: "Acme Co.",
                location: "Palo Alto, CA",
                logo: <AcmeIcon />,
              });
              break;
          }
        }}
        className="w-[340px] [&_.nextui-dropdown-item-content]:w-full [&_.nextui-dropdown-item-content]:font-semibold [&_.nextui-dropdown-item]:py-2 [&_.nextui-dropdown-item_svg]:mr-4 [&_.nextui-dropdown-item_svg]:text-secondary"
      >
        <DropdownSection title="Companies">
          <DropdownItem
            key="1"
            description="San Francisco, CA"
            startContent={<AcmeIcon />}
          >
            Facebook
          </DropdownItem>
          <DropdownItem
            key="2"
            description="Austin, TX"
            startContent={<AcmeLogo />}
          >
            Instagram
          </DropdownItem>
          <DropdownItem
            key="3"
            description="Brooklyn, NY"
            startContent={<AcmeIcon />}
          >
            Twitter
          </DropdownItem>
          <DropdownItem
            key="4"
            description="Palo Alto, CA"
            startContent={<AcmeIcon />}
          >
            Acme Co.
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
