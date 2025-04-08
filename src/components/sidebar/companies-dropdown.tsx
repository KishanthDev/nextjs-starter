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
import { useTheme } from "next-themes";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

const IconWrapper = ({
  icon,
  className,
}: {
  icon: React.ReactElement<{ className?: string }>;
  className?: string;
}) =>
  React.cloneElement(icon, {
    className: `${icon.props.className || ""} ${className || ""}`.trim(),
  });

export const CompaniesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Get the current theme from next-themes
  const isDark = theme === "dark";

  const [company, setCompany] = useState<Company>({
    name: "Acme Co.",
    location: "Palo Alto, CA",
    logo: (
      <IconWrapper
        icon={<AcmeIcon />}
        className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`}
      />
    ),
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
            <div
              className={`rounded border p-1 ${
                isDark ? "border-gray-700" : "border-black"
              }`}
            >
              {company.logo}
            </div>
            <Box className="ml-1">
              <h3
                className={`-mb-1 text-sm font-medium leading-5 ${
                  isDark ? "text-zinc-200" : "text-zinc-700"
                }`}
              >
                {company.name}
              </h3>
              <span
                className={`text-xs font-medium ${
                  isDark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {company.location}
              </span>
            </Box>
            <div
              className={`rounded border p-1 ${
                isDark ? "border-gray-700" : "border-black"
              }`}
            >
              <IconWrapper
                icon={<BottomIcon />}
                className={`h-3 w-3 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                } ${isDark ? "text-white" : "text-black"}`}
              />
            </div>
          </Flex>
        </Box>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Select Company"
        onAction={(key) => {
          const companies = {
            "1": {
              name: "Facebook",
              location: "San Francisco, CA",
              logo: (
                <IconWrapper
                  icon={<AcmeIcon />}
                  className={`h-4 w-4 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
            "2": {
              name: "Instagram",
              location: "Austin, TX",
              logo: (
                <IconWrapper
                  icon={<AcmeLogo />}
                  className={`h-4 w-4 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
            "3": {
              name: "Twitter",
              location: "Brooklyn, NY",
              logo: (
                <IconWrapper
                  icon={<AcmeIcon />}
                  className={`h-4 w-4 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
            "4": {
              name: "Acme Co.",
              location: "Palo Alto, CA",
              logo: (
                <IconWrapper
                  icon={<AcmeIcon />}
                  className={`h-4 w-4 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
          };

          setCompany({
            ...companies[key as keyof typeof companies],
            logo: (
              <div
                className={`rounded border p-1 ${
                  isDark ? "border-gray-700" : "border-black"
                }`}
              >
                {companies[key as keyof typeof companies].logo}
              </div>
            ),
          });
        }}
        className={`w-[200px] rounded-lg border py-1 shadow-sm ${
          isDark
            ? "border-gray-700 bg-gray-900 text-white"
            : "border-gray-200 bg-white text-black"
        } [&_.nextui-dropdown-item-content]:w-full [&_.nextui-dropdown-item-content]:font-semibold`}
      >
        <DropdownSection
          title="Companies"
          className={`px-1 [&>h2]:px-2 [&>h2]:py-1 [&>h2]:text-xs [&>h2]:font-medium ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
          showDivider
          dividerProps={{
            className: isDark ? "bg-gray-700" : "bg-gray-200",
          }}
        >
          {[
            {
              key: "1",
              name: "Facebook",
              location: "San Francisco, CA",
              icon: (
                <IconWrapper
                  icon={<AcmeIcon />}
                  className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
            {
              key: "2",
              name: "Instagram",
              location: "Austin, TX",
              icon: (
                <IconWrapper
                  icon={<AcmeLogo />}
                  className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
            {
              key: "3",
              name: "Twitter",
              location: "Brooklyn, NY",
              icon: (
                <IconWrapper
                  icon={<AcmeIcon />}
                  className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
            {
              key: "4",
              name: "Acme Co.",
              location: "Palo Alto, CA",
              icon: (
                <IconWrapper
                  icon={<AcmeIcon />}
                  className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`}
                />
              ),
            },
          ].map((item) => (
            <DropdownItem
              key={item.key}
              description={item.location}
              startContent={
                <div
                  className={`mr-2 rounded border p-1 ${
                    isDark ? "border-gray-700" : "border-black"
                  }`}
                >
                  {item.icon}
                </div>
              }
              className={`px-2 py-1.5 text-sm ${
                isDark
                  ? "text-white hover:bg-gray-800 [&_.nextui-dropdown-item-description]:text-gray-400"
                  : "text-black hover:bg-gray-50 [&_.nextui-dropdown-item-description]:text-gray-500"
              }`}
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
