"use client";
import { TableWrapper } from "../table/table";
import React from "react";
import { Box } from "../styles/box";
import dynamic from "next/dynamic";
import { Flex } from "../styles/flex";
import NextLink from "next/link";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import { useTheme } from "next-themes";

// Dynamic Chart Import
const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  { ssr: false }
);

export const Content = () => {
  const { theme } = useTheme(); // Get the current theme from next-themes
  const isDark = theme === "dark";

  return (
    <Box
      className={`h-full overflow-y-auto px-4 py-6 lg:px-12 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Balance Cards */}
      <Box className="mb-10">
        <h3
          className={`mb-6 text-center text-2xl font-semibold lg:text-left ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Available Balance
        </h3>
        <Flex className="flex-col gap-4 lg:flex-row lg:justify-start">
          <div className="w-full lg:flex-1">
            <CardBalance1 />
          </div>
          <div className="w-full lg:flex-1">
            <CardBalance2 />
          </div>
          <div className="w-full lg:flex-1">
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
        <Flex className="flex-col items-center gap-6 lg:flex-row lg:items-start">
          <CardAgents />
          <CardTransactions />
        </Flex>
      </Box>

      {/* Latest Users Table */}
      <Box className="mt-8">
        <Flex justify="between" wrap="wrap" className="mb-6 items-center">
          <h3
            className={`text-center text-2xl font-semibold lg:text-left ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Latest Users
          </h3>
          <NextLink href="/accounts" passHref>
            <span
              className={`mt-2 cursor-pointer text-sm hover:underline lg:mt-0 ${
                isDark ? "text-blue-400" : "text-primary"
              }`}
            >
              View All
            </span>
          </NextLink>
        </Flex>

        {/* Horizontal Scrollable Table Container */}
        <div className="overflow-x-auto">
          <TableWrapper />
        </div>
      </Box>
    </Box>
  );
};
