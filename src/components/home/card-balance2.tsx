"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";
import { useTheme } from "next-themes";

export const CardBalance2 = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card
      className={`w-full h-full rounded-xl shadow-lg ${isDark ? "bg-zinc-900" : "bg-default-100"
        }`}
    >
      <CardBody className="flex flex-col gap-4 p-4 sm:gap-3 sm:p-5 h-full">
        {/* Header Section */}
        <div className="flex items-start gap-3">
          <Community
            className={`h-6 w-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          />
          <div className="flex flex-col">
            <span
              className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-800"
                }`}
            >
              Health Insurance
            </span>
            <span
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              +2400 People
            </span>
          </div>
        </div>

        {/* Balance Section */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span
            className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"
              }`}
          >
            $12,138
          </span>
          <span
            className={`text-sm font-medium ${isDark ? "text-red-700" : "text-red-700"
              }`}
          >
            + 4.5%
          </span>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between flex-1">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-semibold ${isDark ? "text-green-400" : "text-green-600"
                  }`}
              >
                ↓
              </span>
              <span
                className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-700"
                  }`}
              >
                11,930
              </span>
            </div>
            <span
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              USD
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-semibold ${isDark ? "text-red-700" : "text-red-700"
                  }`}
              >
                ↑
              </span>
              <span
                className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-700"
                  }`}
              >
                54,120
              </span>
            </div>
            <span
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              USD
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span
                className={`text-sm font-semibold ${isDark ? "text-green-400" : "text-green-600"
                  }`}
              >
                ⭐
              </span>
              <span
                className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-700"
                  }`}
              >
                150
              </span>
            </div>
            <span
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              VIP
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};