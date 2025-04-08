"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";

export const CardBalance1 = () => (
  <Card className="max-w-[375px] rounded-xl bg-blue-600 px-6 text-white shadow-lg">
    <CardBody className="flex flex-col gap-6 py-10">
      {/* Top Section */}
      <div className="flex items-start gap-4">
        <Community />
        <div className="flex flex-col">
          <span className="text-base font-semibold text-white">
            Auto Insurance
          </span>
          <span className="text-sm text-white opacity-80">1311 Cars</span>
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex items-center gap-6">
        <span className="text-xl font-semibold">$45,910</span>
        <span className="text-sm font-medium text-green-400">+ 4.5%</span>
      </div>

      {/* Metrics Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-green-400">↓</span>
          <span className="text-sm text-white">100,930 USD</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-red-400">↑</span>
          <span className="text-sm text-white">54,120 USD</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-green-400">⭐</span>
          <span className="text-sm text-white">125 VIP</span>
        </div>
      </div>
    </CardBody>
  </Card>
);
