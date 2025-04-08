import React from "react";
import { cn } from "@/lib/utils"; // if you're using a `cn()` utility to merge class names

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const IconButton = ({
  className,
  children,
  ...props
}: IconButtonProps) => (
  <button
    className={cn(
      "flex cursor-pointer items-center justify-center border-none bg-transparent outline-none transition-opacity hover:opacity-80 active:opacity-60",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

interface StyledBadgeProps {
  type: "active" | "paused" | "vacation";
  children: React.ReactNode;
}

const badgeVariants = {
  active: "bg-green-100 text-green-800",
  paused: "bg-red-100 text-red-800",
  vacation: "bg-yellow-100 text-yellow-800",
};

export const StyledBadge = ({ type, children }: StyledBadgeProps) => (
  <span
    className={cn(
      "mx-1 inline-block rounded-[14px] px-3 py-1 text-center text-[10px] font-bold uppercase leading-none tracking-wider shadow-sm",
      badgeVariants[type]
    )}
  >
    {children}
  </span>
);
