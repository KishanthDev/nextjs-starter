"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";

export const CardBalance2 = () => (
  <Card className="max-w-[375px] rounded-xl bg-default-100 px-6 shadow-md">
    <CardBody className="flex flex-col gap-6 py-10">
      {/* Header Section */}
      <div className="flex items-start gap-4">
        <Community className="cursor-pointer text-gray-700 " />
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-800">
            Health Insurance
          </span>
          <span className="text-sm text-gray-500">+2400 People</span>
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex items-center gap-6">
        <span className="text-xl font-semibold text-black">$12,138</span>
        <span className="text-sm font-medium text-red-600">+ 4.5%</span>
      </div>

      {/* Stats Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-green-600">↓</span>
          <span className="text-sm text-gray-700">11,930 USD</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-red-600">↑</span>
          <span className="text-sm text-gray-700">54,120 USD</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-green-600">⭐</span>
          <span className="text-sm text-gray-700">150 VIP</span>
        </div>
      </div>
    </CardBody>
  </Card>
);
