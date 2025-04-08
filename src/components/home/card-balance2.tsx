"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";

export const CardBalance2 = () => (
  <Card className="rounded-xl bg-default-100 px-4 shadow-md w-full">
    <CardBody className="flex flex-col gap-3 py-4">
      {/* Header Section */}
      <div className="flex items-start gap-3">
        <Community className="h-6 w-6 text-gray-700" />
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-800">
            Health Insurance
          </span>
          <span className="text-sm text-gray-500">+2400 People</span>
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex items-center gap-4">
        <span className="text-xl font-semibold text-black">$12,138</span>
        <span className="text-sm font-medium text-red-600">+ 4.5%</span>
      </div>

      {/* Stats Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-green-600">↓</span>
            <span className="text-base font-semibold text-gray-700">11,930</span>
          </div>
          <span className="text-xs text-gray-500">USD</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-red-600">↑</span>
            <span className="text-base font-semibold text-gray-700">54,120</span>
          </div>
          <span className="text-xs text-gray-500">USD</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-green-600">⭐</span>
            <span className="text-base font-semibold text-gray-700">150</span>
          </div>
          <span className="text-xs text-gray-500">VIP</span>
        </div>
      </div>
    </CardBody>
  </Card>
);
