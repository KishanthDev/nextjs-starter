"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";
import { useTheme } from "next-themes";

export const CardBalance3 = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card
      className={`w-full h-full rounded-xl shadow-lg ${isDark ? "bg-green-500" : "bg-green-500"
        }`}
    >
      <CardBody className="flex flex-col gap-4 p-4 sm:gap-3 sm:p-5 h-full">
        {/* Header */}
        <div className="flex items-start gap-3">
          <Community className="h-6 w-6 text-white" />
          <div className="flex flex-col">
            <span className="text-base font-semibold text-white">
              Balance Insurance
            </span>
            <span className="text-sm text-white opacity-80">1311 Cars</span>
          </div>
        </div>

        {/* Balance */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-lg font-semibold text-white">$3,910</span>
          <span
            className={`text-sm font-medium ${isDark ? "text-red-700" : "text-red-700"
              }`}
          >
            + 4.5%
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between flex-1">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-semibold ${isDark ? "text-red-700" : "text-red-700"
                  }`}
              >
                ↓
              </span>
              <span className="text-base font-semibold text-white">100,930</span>
            </div>
            <span className="text-xs text-white opacity-70">USD</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-semibold ${isDark ? "text-red-700" : "text-red-700"
                  }`}
              >
                ↑
              </span>
              <span className="text-base font-semibold text-white">54,120</span>
            </div>
            <span className="text-xs text-white opacity-70">USD</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-semibold ${isDark ? "text-green-200" : "text-green-300"
                  }`}
              >
                ⭐
              </span>
              <span className="text-base font-semibold text-white">125</span>
            </div>
            <span className="text-xs text-white opacity-70">VIP</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};