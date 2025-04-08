"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";

export const CardBalance1 = () => (
  <Card className="w-full rounded-xl bg-blue-600 text-white shadow-lg dark:bg-blue-900">
    <CardBody className="flex flex-col gap-4 p-4 sm:gap-3 sm:p-5">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-3 gap-2">
        <Community className="h-6 w-6 text-white dark:text-white" />
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-semibold text-white">
            Auto Insurance
          </span>
          <span className="text-sm sm:text-base text-white opacity-80">
            1311 Cars
          </span>
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className="text-lg sm:text-xl font-semibold">$45,910</span>
        <span className="text-sm font-medium text-green-400">+ 4.5%</span>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-between">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-green-400">↓</span>
            <span className="text-base font-semibold text-white">100,930</span>
          </div>
          <span className="text-xs text-white opacity-70">USD</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-red-400">↑</span>
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
