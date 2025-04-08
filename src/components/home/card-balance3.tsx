"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const CardBalance3 = () => (
  <Card className="w-full rounded-xl bg-green-600 px-4 shadow-xl dark:bg-green-700">
    <CardBody className="py-4">
      {/* Header */}
      <Flex className="items-start gap-3">
        <Community className="h-6 w-6 text-white" />
        <Flex direction="column">
          <span className="font-medium text-white">Balance Insurance</span>
          <span className="text-xs text-white opacity-80">1311 Cars</span>
        </Flex>
      </Flex>

      {/* Balance */}
      <Flex className="flex-wrap items-center gap-4 py-3 sm:flex-nowrap">
        <span className="text-xl font-semibold text-white">$3,910</span>
        <span className="text-xs font-medium text-red-300 dark:text-red-200">
          + 4.5%
        </span>
      </Flex>

      {/* Stats */}
      <Flex className="flex-wrap items-center justify-between gap-4 sm:gap-0">
        <Box className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-red-300 dark:text-red-200">
              ↓
            </span>
            <span className="text-sm font-semibold text-white">100,930</span>
          </div>
          <span className="text-xs text-white opacity-70">USD</span>
        </Box>

        <Box className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-red-300 dark:text-red-200">
              ↑
            </span>
            <span className="text-sm font-semibold text-white">54,120</span>
          </div>
          <span className="text-xs text-white opacity-70">USD</span>
        </Box>

        <Box className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-green-300 dark:text-green-200">
              ⭐
            </span>
            <span className="text-sm font-semibold text-white">125</span>
          </div>
          <span className="text-xs text-white opacity-70">VIP</span>
        </Box>
      </Flex>
    </CardBody>
  </Card>
);
