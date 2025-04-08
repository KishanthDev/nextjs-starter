"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const CardBalance3 = () => (
  <Card className="max-w-[375px] rounded-xl bg-green-600 px-6">
    <CardBody className="py-10">
      <Flex className="gap-5">
        <Community />
        <Flex direction="column">
          <span className="font-medium text-white">Balance Insurance</span>
          <span className="text-xs text-white">1311 Cars</span>
        </Flex>
      </Flex>

      <Flex className="items-center gap-6 py-4">
        <span className="text-xl font-semibold text-white">$3,910</span>
        <span className="text-xs text-red-600">+ 4.5%</span>
      </Flex>

      <Flex className="items-center gap-12">
        <Box>
          <span className="text-xs font-semibold text-red-600">↓</span>
          <span className="text-xs text-white">100,930 USD</span>
        </Box>
        <Box>
          <span className="text-xs font-semibold text-red-600">↑</span>
          <span className="text-xs text-white">54,120 USD</span>
        </Box>
        <Box>
          <span className="text-xs font-semibold text-green-300">⭐</span>
          <span className="text-xs text-white">125 VIP</span>
        </Box>
      </Flex>
    </CardBody>
  </Card>
);
