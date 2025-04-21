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
      "bg-gray-200 dark:bg-gray-800": isActive,
      "hover:bg-gray-100 dark:hover:bg-gray-700": !isActive,
    }
  );

  const iconWrapper = (
    <span className="min-w-[24px] h-6 w-6 flex items-center justify-center">
      {icon}
    </span>
  );

  const textClassNames = clsx(
    "transition-all duration-300 ease-in-out origin-left",
    {
      "opacity-0 scale-95 w-0 overflow-hidden": collapsed,
      "opacity-100 scale-100 ml-3 w-auto": !collapsed,
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
