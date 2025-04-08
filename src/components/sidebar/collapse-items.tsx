"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronUpIcon } from "../icons/sidebar/chevron-up-icon";
import { useTheme } from "next-themes";

interface Props {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export const CollapseItems = ({ icon, items, title }: Props) => {
  const { theme } = useTheme(); // Get the current theme from next-themes
  const isDark = theme === "dark";

  return (
    <Accordion
      selectionMode="multiple"
      isCompact
      itemClasses={{
        base: "px-4",
        heading: `hover:bg-zinc-100 rounded-lg transition-all ${
          isDark
            ? "dark:hover:bg-gray-800 dark:hover:text-gray-200"
            : "hover:text-zinc-700"
        }`,
        indicator: `${isDark ? "text-gray-400" : "text-default-500"}`,
        content: `${isDark ? "text-white" : "text-black"}`, // Ensure content text adapts
      }}
    >
      <AccordionItem
        key={title}
        aria-label={title}
        title={
          <div className="flex items-center gap-4">
            {icon}
            <span
              className={`text-sm font-normal ${
                isDark ? "text-zinc-200" : "text-zinc-700"
              }`}
            >
              {title}
            </span>
          </div>
        }
        indicator={({ isOpen }) => (
          <ChevronUpIcon
            className={`h-4 w-4 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-0" : "rotate-180"
            } ${isDark ? "text-gray-400" : "text-default-500"}`}
          />
        )}
      >
        <div className="flex flex-col gap-1 pl-5 pt-2">
          {items.map((item, index) => (
            <span
              key={index}
              className={`cursor-pointer text-sm ${
                isDark
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};
