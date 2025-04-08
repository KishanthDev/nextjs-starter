"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import { Box } from "../styles/box";
import dynamic from "next/dynamic";
import { Flex } from "../styles/flex";
import { TableWrapper } from "../table/table";
import NextLink from "next/link";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <Box className="h-full overflow-hidden px-4 py-6 lg:px-12">
    {/* Balance Cards */}
    <Box className="mb-10">
      <h3 className="mb-6 text-center text-xl font-semibold lg:text-left">
        Available Balance
      </h3>

      <Flex className="flex flex-col gap-4 lg:flex-row lg:justify-start">
        <div className="flex-1">
          <CardBalance1 />
        </div>
        <div className="flex-1">
          <CardBalance2 />
        </div>
        <div className="flex-1">
          <CardBalance3 />
        </div>
      </Flex>
    </Box>

    {/* Statistics Chart */}
    <Box className="mb-10">
      <h3 className="mb-6 text-center text-xl font-semibold lg:text-left">
        Statistics
      </h3>
      <Box className="w-full rounded-2xl bg-default-100 px-6 py-8 shadow-lg">
        <Chart />
      </Box>
    </Box>

    {/* Section: Agents & Transactions */}
        <Box className="mb-10">
            <h3 className="mb-6 text-center text-3xl font-bold">Section</h3>

            <Flex className="flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
                <CardAgents  />
                <CardTransactions  />
            </Flex>
        </Box>



    {/* Latest Users Table */}
    <Box className="mt-8">
      <Flex justify="between" wrap="wrap" className="mb-6 items-center">
        <h3 className="text-center text-xl font-semibold lg:text-left">
          Latest Users
        </h3>
        <NextLink href="/accounts" passHref>
          <Link color="primary" className="text-center lg:text-left">
            View All
          </Link>
        </NextLink>
      </Flex>
      <TableWrapper />
    </Box>
  </Box>
);
