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

const IconWrapper = ({ icon, className }: { icon: React.ReactElement<{ className?: string }>, className?: string }) => {
  return React.cloneElement(icon, {
    className: `${icon.props.className || ''} ${className || ''}`.trim()
  });
};

export const CompaniesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [company, setCompany] = useState<Company>({
    name: "Acme Co.",
    location: "Palo Alto, CA",
    logo: <IconWrapper icon={<AcmeIcon />} className="w-6 h-6" />,
  });

  return (
    <Dropdown
      placement="bottom-end"
      className="font-medium"
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <DropdownTrigger>
        <Box className="cursor-pointer">
          <Flex align="center" className="gap-2">
            <div className="border border-black rounded p-1">
              {company.logo}
            </div>
            <Box className="ml-1">
              <h3 className="-mb-1 text-sm font-medium leading-5 text-zinc-700 dark:text-zinc-200">
                {company.name}
              </h3>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {company.location}
              </span>
            </Box>
            <div className="border border-black rounded p-1">
              <IconWrapper
                icon={<BottomIcon />}
                className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
          </Flex>
        </Box>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Select Company"
        onAction={(key) => {
          const companies = {
            "1": { name: "Facebook", location: "San Francisco, CA", logo: <AcmeIcon /> },
            "2": { name: "Instagram", location: "Austin, TX", logo: <AcmeLogo className="w-4 h-4" /> },
            "3": { name: "Twitter", location: "Brooklyn, NY", logo: <AcmeIcon /> },
            "4": { name: "Acme Co.", location: "Palo Alto, CA", logo: <AcmeIcon /> }
          };

          setCompany({
            ...companies[key as keyof typeof companies],
            logo: <div className="border border-black rounded p-1">
              <IconWrapper icon={companies[key as keyof typeof companies].logo} className="w-4 h-4" />
            </div>
          });
        }}
        className="w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm py-1 [&_.nextui-dropdown-item-content]:w-full [&_.nextui-dropdown-item-content]:font-semibold"
      >
        <DropdownSection
          title="Companies"
          className="px-1 [&>h2]:text-xs [&>h2]:font-medium [&>h2]:text-gray-500 [&>h2]:px-2 [&>h2]:py-1"
          showDivider
        >
          {[
            { key: "1", name: "Facebook", location: "San Francisco, CA", icon: <AcmeIcon /> },
            { key: "2", name: "Instagram", location: "Austin, TX", icon: <AcmeLogo className="w-3 h-3" /> },
            { key: "3", name: "Twitter", location: "Brooklyn, NY", icon: <AcmeIcon /> },
            { key: "4", name: "Acme Co.", location: "Palo Alto, CA", icon: <AcmeIcon /> }
          ].map((item) => (
            <DropdownItem
              key={item.key}
              description={item.location}
              startContent={
                <div className="border border-black rounded p-1 mr-2">
                  <IconWrapper icon={item.icon} className="w-3 h-3" />
                </div>
              }
              className="py-1.5 px-2 text-sm hover:bg-gray-50"
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};