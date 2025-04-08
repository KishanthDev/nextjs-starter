"use client";
import TableWrapper from "../table/table";
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

// Dynamic Chart Import
const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <Box className="h-full overflow-y-auto px-4 py-6 lg:px-12 dark:bg-black bg-white">
    {/* Balance Cards */}
    <Box className="mb-10">
      <h3 className="mb-6 text-center text-2xl font-semibold text-black dark:text-white lg:text-left">
        Available Balance
      </h3>

      <Flex className="flex-col gap-4 lg:flex-row lg:justify-start">
        <div className="w-full lg:w-1/3">
          <CardBalance1 />
        </div>
        <div className="w-full lg:w-1/3">
          <CardBalance2 />
        </div>
        <div className="w-full lg:w-1/3">
          <CardBalance3 />
        </div>
      </Flex>
    </Box>

    {/* Statistics Chart */}
    <Box className="mb-10">
      <h3 className="mb-6 text-center text-2xl font-semibold text-black dark:text-white lg:text-left">
        Statistics
      </h3>
      <Box className="w-full rounded-2xl bg-default-100 dark:bg-default-200 px-4 sm:px-6 py-6 sm:py-8 shadow-lg">
        <Chart />
      </Box>
    </Box>

    {/* Section: Agents & Transactions */}
    <Box className="mb-10">
      <h3 className="mb-6 text-center text-2xl font-semibold text-black dark:text-white">
        Section
      </h3>

      <Flex className="flex-col gap-6 items-center lg:flex-row lg:items-start">
        <CardAgents />
        <CardTransactions />
      </Flex>
    </Box>

    {/* Latest Users Table */}
    <Box className="mt-8">
      <Flex justify="between" wrap="wrap" className="mb-6 items-center">
        <h3 className="text-2xl font-semibold text-center lg:text-left text-black dark:text-white">
          Latest Users
        </h3>
        <NextLink href="/accounts" passHref>
          <span className="cursor-pointer text-primary hover:underline text-sm mt-2 lg:mt-0">
            View All
          </span>
        </NextLink>
      </Flex>
      <TableWrapper />
    </Box>
  </Box>
);
