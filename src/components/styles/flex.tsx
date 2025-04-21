// components/Flex.tsx
import { cn } from "@nextui-org/react";
import React from "react";

type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  justify?: "center" | "start" | "end" | "between" | "around";
  align?: "center" | "start" | "end" | "stretch" | "between";
  wrap?: "wrap" | "nowrap";
};

export const Flex = ({
  className,
  direction = "row",
  justify,
  align,
  wrap,
  ...props
}: FlexProps) => {
  const directionMap: Record<string, string> = {
    row: "flex-row",
    column: "flex-col",
  };

  const justifyMap: Record<string, string> = {
    center: "justify-center",
    start: "justify-start",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  const alignMap: Record<string, string> = {
    center: "items-center",
    start: "items-start",
    end: "items-end",
    stretch: "items-stretch",
    between: "items-between",
  };

  const wrapMap: Record<string, string> = {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
  };

  return (
    <div
      className={cn(
        "box-border flex",
        directionMap[direction],
        justify && justifyMap[justify],
        align && alignMap[align],
        wrap && wrapMap[wrap],
        className,
      )}
      {...props}
    />
  );
};
