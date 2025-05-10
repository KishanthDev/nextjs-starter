"use client";

import { Layout } from "./layout";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLayout, setShowLayout] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login") === "true";
    const isAuthRoute = ["/", "/auth", "/signin", "/signup"].includes(pathname);

    if (isLoggedIn && isAuthRoute) {
      console.log(`ClientLayoutWrapper: Redirecting from ${pathname} to /dashboard (isLoggedIn=${isLoggedIn})`);
      router.push("/dashboard");
    }

    const shouldShowLayout = isLoggedIn && !isAuthRoute;

    console.log(`ClientLayoutWrapper: pathname=${pathname}, isLoggedIn=${isLoggedIn}, isAuthRoute=${isAuthRoute}, showLayout=${shouldShowLayout}`);
    setShowLayout(shouldShowLayout);
  }, [pathname, router]);

  return showLayout ? <Layout>{children}</Layout> : children;
}