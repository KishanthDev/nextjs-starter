import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { Flex } from "../styles/flex";
import clsx from "clsx";


interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({ title, icon, href, isActive, onClick }: SidebarItemProps) => {
  const classNames = clsx(
    "flex items-center gap-3 rounded-md p-2 text-sm font-medium",
    {
      "bg-gray-200 dark:bg-gray-800": isActive,
      "hover:bg-gray-100 dark:hover:bg-gray-700": !isActive,
    }
  );

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {icon}
        <span className="truncate">{title}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {icon}
      <span className="truncate">{title}</span>
    </button>
  );
};
