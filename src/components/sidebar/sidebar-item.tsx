import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import clsx from "clsx";

interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({ title, icon, href, isActive, onClick }: SidebarItemProps) => {
  const { collapsed } = useSidebarContext();

  const classNames = clsx(
    "flex items-center rounded-md p-2 text-sm font-medium transition-all duration-300 ease-in-out",
    {
      "bg-white/20 dark:bg-white/10": isActive, // White background for active item
      "hover:bg-gray-100 dark:hover:bg-gray-700": !isActive,
    }
  );

  const iconWrapper = (
    <span className={clsx(
      "min-w-[24px] h-6 w-6 flex items-center justify-center transition-colors duration-300",
      {
        "text-white dark:text-white": isActive, // White icon for active item
        "text-gray-600 dark:text-gray-400": !isActive,
      }
    )}>
      {icon}
    </span>
  );

  const textClassNames = clsx(
    "transition-all duration-300 ease-in-out origin-left",
    {
      "opacity-0 scale-95 w-0 overflow-hidden": collapsed,
      "opacity-100 scale-100 ml-3 w-auto": !collapsed,
      "font-bold text-white dark:text-white": isActive, // White bold text for active item
      "text-gray-700 dark:text-gray-300": !isActive,
    }
  );

  const content = (
    <>
      {iconWrapper}
      <span className={textClassNames}>{title}</span>
    </>
  );

  if (href) {
    return (
      <Link as={NextLink} href={href} className={classNames}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {content}
    </button>
  );
};