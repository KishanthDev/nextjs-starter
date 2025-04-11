"use client";

import { TableWrapper } from "../table/table";
import React from "react";
import { Box } from "../styles/box";
import dynamic from "next/dynamic";
import { Flex } from "../styles/flex";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import { useTheme } from "next-themes";
import Link from "next/link";

// Dynamically import chart
const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Box
      className={`min-h-screen w-full overflow-y-auto overflow-x-hidden px-4 py-6 lg:px-12 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Available Balance */}
      <Box className="mb-10">
        <h3
          className={`mb-6 text-center text-2xl font-semibold lg:text-left ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Available Balance
        </h3>
        <Flex className="min-w-0 flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="w-full min-w-0 lg:w-1/3">
            <CardBalance1 />
          </div>
          <div className="w-full min-w-0 lg:w-1/3">
            <CardBalance2 />
          </div>
          <div className="w-full min-w-0 lg:w-1/3">
            <CardBalance3 />
          </div>
        </Flex>
      </Box>

      {/* Statistics Chart */}
      <Box className="mb-10">
        <h3
          className={`mb-6 text-center text-2xl font-semibold lg:text-left ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Statistics
        </h3>
        <Box
          className={`w-full rounded-2xl px-4 py-6 shadow-lg sm:px-6 sm:py-8 ${
            isDark ? "bg-gray-900" : "bg-default-100"
          }`}
        >
          <Chart />
        </Box>
      </Box>

      {/* Section: Agents & Transactions */}
      <Box className="mb-10">
        <h3
          className={`mb-6 text-center text-2xl font-semibold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Section
        </h3>
        <Flex className="min-w-0 flex-col gap-6 lg:flex-row lg:items-start">
          <div className="w-full min-w-0 lg:w-1/2">
            <CardAgents />
          </div>
          <div className="w-full min-w-0 lg:w-1/2">
            <CardTransactions />
          </div>
        </Flex>
      </Box>

      {/* Latest Users Table Header */}
      <Box className="mt-8">
        <Flex justify="between" wrap="wrap" className="mb-6 items-center">
          <h3
            className={`text-center text-2xl font-semibold lg:text-left ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Latest Users
          </h3>
          <Link
            href="/accounts"
            className={`mt-2 text-sm hover:underline lg:mt-0 ${
              isDark ? "text-blue-400" : "text-primary"
            }`}
          >
            View All
          </Link>
        </Flex>

        {/* Latest Users Table (if needed) */}
        {/* <TableWrapper /> */}
      </Box>
    </Box>
  );
};
