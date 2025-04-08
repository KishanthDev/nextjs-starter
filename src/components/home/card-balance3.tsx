"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const CardBalance3 = () => (
  <Card className="rounded-xl bg-green-600 px-4 w-full">
    <CardBody className="py-4">
      <Flex className="gap-3">
        <Community className="h-6 w-6" />
        <Flex direction="column">
          <span className="font-medium text-white">Balance Insurance</span>
          <span className="text-xs text-white">1311 Cars</span>
        </Flex>
      </Flex>

      <Flex className="items-center gap-4 py-3">
        <span className="text-xl font-semibold text-white">$3,910</span>
        <span className="text-xs text-red-300">+ 4.5%</span>
      </Flex>

      <Flex className="items-center justify-between">
        <Box className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-red-300">↓</span>
            <span className="text-sm font-semibold text-white">100,930</span>
          </div>
          <span className="text-xs text-white opacity-70">USD</span>
        </Box>

        <Box className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-red-300">↑</span>
            <span className="text-sm font-semibold text-white">54,120</span>
          </div>
          <span className="text-xs text-white opacity-70">USD</span>
        </Box>

        <Box className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-green-300">⭐</span>
            <span className="text-sm font-semibold text-white">125</span>
          </div>
          <span className="text-xs text-white opacity-70">VIP</span>
        </Box>
      </Flex>
    </CardBody>
  </Card>
);
