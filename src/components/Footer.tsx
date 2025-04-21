// footer.tsx
"use client";
import React from "react";

export const Footer = () => (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-center py-4 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Chat App. All rights reserved.
    </footer>
  );
