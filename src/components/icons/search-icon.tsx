import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
  width?: number;
  height?: number;
}

export const SearchIcon = ({
  size,
  fill = "currentColor",
  width = 24,
  height = 24,
  className,
  ...props
}: Props) => (
  <svg
    className={className}
    fill="none"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
