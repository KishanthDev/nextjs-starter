import { Link, LinkProps } from "@nextui-org/react";
import React from "react";

// Define props for Breadcrumbs
interface BreadcrumbsProps {
  children: React.ReactNode;
}

// Breadcrumbs component
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children }) => (
  <ul className="m-0 flex list-none gap-2 p-0">{children}</ul>
);

// Define props for CrumbLink (extending NextUI's LinkProps)
interface CrumbLinkProps extends LinkProps {
  children: React.ReactNode;
}

// CrumbLink component
export const CrumbLink: React.FC<CrumbLinkProps> = ({ children, ...props }) => (
  <Link className="text-gray-600 hover:text-gray-700" {...props}>
    {children}
  </Link>
);

// Define props for Crumb
interface CrumbProps {
  children: React.ReactNode;
}

// Crumb component
export const Crumb: React.FC<CrumbProps> = ({ children }) => (
  <li className="flex flex-row items-center gap-1 last:[&>a]:pointer-events-none last:[&>a]:cursor-default last:[&>a]:text-gray-700">
    {children}
  </li>
);
