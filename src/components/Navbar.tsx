"use client";

import { Bell, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 w-full items-center border-b border-zinc-200 bg-white px-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 text-zinc-800 dark:text-white" />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-zinc-800 dark:text-white" />
        </Button>
      </div>
    </header>
  );
}
