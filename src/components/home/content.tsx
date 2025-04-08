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
  <Box className="h-full overflow-y-auto bg-white px-4 py-6 dark:bg-black lg:px-12">
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
      <Box className="w-full rounded-2xl bg-default-100 px-4 py-6 shadow-lg dark:bg-default-200 sm:px-6 sm:py-8">
        <Chart />
      </Box>
    </Box>

    {/* Section: Agents & Transactions */}
    <Box className="mb-10">
      <h3 className="mb-6 text-center text-2xl font-semibold text-black dark:text-white">
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
        <h3 className="text-center text-2xl font-semibold text-black dark:text-white lg:text-left">
          Latest Users
        </h3>
        <NextLink href="/accounts" passHref>
          <span className="mt-2 cursor-pointer text-sm text-primary hover:underline lg:mt-0">
            View All
          </span>
        </NextLink>
      </Flex>
      <TableWrapper />
    </Box>
  </Box>
);
