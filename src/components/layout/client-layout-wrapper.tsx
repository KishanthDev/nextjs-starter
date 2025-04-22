// components/client-layout-wrapper.tsx
"use client";

import { Layout } from "./layout";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLayout, setShowLayout] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login") === "true";

    const shouldShowLayout = isLoggedIn;

    setShowLayout(shouldShowLayout);
  }, [pathname]);

  return showLayout ? <Layout>{children}</Layout> : children;
}
