import React, { SVGProps } from "react";

// Define types for the props of the components
interface SvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

interface PathProps extends React.SVGProps<SVGPathElement> {
  className?: string;
}

interface RectProps extends React.SVGProps<SVGRectElement> {
  className?: string;
}

// Unstyled Svg component with type for className
const UnstyledSvg: React.FC<SvgProps> = ({ className, ...props }) => (
  <svg
    className={`h-full w-full fill-none ${className}`} // Apply Tailwind classes here
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);

// Unstyled Path component with type for className
const UnstyledPath: React.FC<PathProps> = ({ className, ...props }) => (
  <path className={`fill-current ${className}`} {...props} />
);

// Unstyled Rect component with type for className
const UnstyledRect: React.FC<RectProps> = ({ className, ...props }) => (
  <rect className={`fill-current ${className}`} {...props} />
);

// Exporting the Svg component
export const Svg = Object.assign(UnstyledSvg, {
  Path: UnstyledPath,
  Rect: UnstyledRect,
});
