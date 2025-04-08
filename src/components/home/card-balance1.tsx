"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";
import { useTheme } from "next-themes";

export const CardBalance1 = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card
      className={`w-full h-full rounded-xl shadow-lg ${isDark ? "bg-blue-600" : "bg-blue-600"
        }`}
    >
      <CardBody className="flex flex-col gap-4 p-4 sm:gap-3 sm:p-5 h-full">
        {/* Top Section */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
          <Community className="h-6 w-6 text-white" />
          <div className="flex flex-col">
            <span className="text-base font-semibold text-white sm:text-lg">
              Auto Insurance
            </span>
            <span className="text-sm text-white opacity-80 sm:text-base">
              1311 Cars
            </span>
          </div>
        </div>

        {/* Balance Section */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-lg font-semibold text-white sm:text-xl">
            $45,910
          </span>
          <span className="text-sm font-medium text-green-400">+ 4.5%</span>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between flex-1">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-green-400">↓</span>
              <span className="text-base font-semibold text-white">100,930</span>
            </div>
            <span className="text-xs text-white opacity-70">USD</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-red-700">↑</span>
              <span className="text-base font-semibold text-white">54,120</span>
            </div>
            <span className="text-xs text-white opacity-70">USD</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-green-400">⭐</span>
              <span className="text-base font-semibold text-white">125</span>
            </div>
            <span className="text-xs text-white opacity-70">VIP</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};