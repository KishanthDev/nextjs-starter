"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";

export const CardBalance2 = () => (
  <Card className="w-full rounded-xl bg-default-100 px-4 shadow-lg dark:bg-zinc-900">
    <CardBody className="flex flex-col gap-4 py-4">
      {/* Header Section */}
      <div className="flex items-start gap-3">
        <Community className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-800 dark:text-white">
            Health Insurance
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            +2400 People
          </span>
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-start">
        <span className="text-xl font-semibold text-black dark:text-white">
          $12,138
        </span>
        <span className="text-sm font-medium text-red-600 dark:text-red-400">
          + 4.5%
        </span>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-0">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              ↓
            </span>
            <span className="text-base font-semibold text-gray-700 dark:text-white">
              11,930
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">USD</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
              ↑
            </span>
            <span className="text-base font-semibold text-gray-700 dark:text-white">
              54,120
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">USD</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              ⭐
            </span>
            <span className="text-base font-semibold text-gray-700 dark:text-white">
              150
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">VIP</span>
        </div>
      </div>
    </CardBody>
  </Card>
);
