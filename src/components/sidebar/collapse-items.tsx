import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronUpIcon } from "../icons/sidebar/chevron-up-icon";

interface Props {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export const CollapseItems = ({ icon, items, title }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Accordion
      selectionMode="multiple"
      isCompact
      itemClasses={{
        base: "px-4",
        heading:
          "hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all",
        indicator: "text-default-500",
      }}
    >
      <AccordionItem
        key={title}
        aria-label={title}
        title={
          <div
            className="flex w-full items-center justify-between"
            onClick={handleToggle}
          >
            <div className="flex items-center gap-4">
              {icon}
              <span className="text-sm font-normal text-zinc-700 dark:text-zinc-200">
                {title}
              </span>
            </div>
            <ChevronUpIcon
              className="transition-transform"
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out", // Smooth transition for rotation
              }}
            />
          </div>
        }
      >
        <div className="flex flex-col gap-1 pl-5 pt-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="cursor-pointer text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              {item}
            </span>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};
