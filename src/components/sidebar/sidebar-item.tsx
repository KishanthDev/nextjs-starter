"use client";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { Flex } from "../styles/flex";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };

  return (
    <NextLink href={href}>
      <Link
        className="w-full text-zinc-600 dark:text-zinc-400"
        underline="none"
      >
        <Flex
          onClick={handleClick}
          className={`min-h-[44px] w-full cursor-pointer items-center gap-6 rounded-md px-7 transition-all duration-150 ${
            isActive
              ? "bg-blue-200 [&_svg_path]:fill-blue-600"
              : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
          align={"center"}
        >
          {icon}
          <span className="text-base font-normal text-zinc-600 dark:text-zinc-400">
            {title}
          </span>
        </Flex>
      </Link>
    </NextLink>
  );
};
