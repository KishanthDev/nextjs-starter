"use client";

import React from "react";
import { Box } from "../styles/box";
import dynamic from "next/dynamic";
import { Flex } from "../styles/flex";
import { useTheme } from "next-themes";
import Link from "next/link";

// Dynamic imports using named exports
const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  { ssr: false },
);
const TableWrapper = dynamic(
  () => import("../table/table").then((mod) => mod.TableWrapper),
  { ssr: false },
);
const CardBalance1 = dynamic(
  () => import("./card-balance1").then((mod) => mod.CardBalance1),
  { ssr: false },
);
const CardBalance2 = dynamic(
  () => import("./card-balance2").then((mod) => mod.CardBalance2),
  { ssr: false },
);
const CardBalance3 = dynamic(
  () => import("./card-balance3").then((mod) => mod.CardBalance3),
  { ssr: false },
);
const CardAgents = dynamic(
  () => import("./card-agents").then((mod) => mod.CardAgents),
  { ssr: false },
);
const CardTransactions = dynamic(
  () => import("./card-transactions").then((mod) => mod.CardTransactions),
  { ssr: false },
);

export const Content = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const balances = [
    <CardBalance1 key="cb1" />,
    <CardBalance2 key="cb2" />,
    <CardBalance3 key="cb3" />,
  ];

  return (
    <Box
      className={`min-h-screen w-full overflow-y-auto overflow-x-hidden px-4 py-6 lg:px-12 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Available Balance */}
      <Box className="mb-10">
        <h3
          className={`mb-6 text-center text-2xl font-semibold lg:text-left ${isDark ? "text-white" : "text-black"}`}
        >
          Available Balance
        </h3>
        <Flex className="flex-col gap-4 lg:flex-row lg:justify-between">
          {balances.map((Component, index) => (
            <Box key={index} className="w-full min-w-0 lg:w-1/3">
              {Component}
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Statistics Chart */}
      <Box className="mb-10">
        <h3
          className={`mb-6 text-center text-2xl font-semibold lg:text-left ${isDark ? "text-white" : "text-black"}`}
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
      
    </Box>
  );
};
