"use client";

import React from "react";
import { Card, CardBody, Avatar } from "@nextui-org/react";
import { Flex } from "../styles/flex";

export const CardTransactions = () => (
  <Card className="max-w-[375px] rounded-xl bg-default-100 px-6 shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300">
    <CardBody className="py-10">
      <Flex className="justify-center gap-5">
        <h3 className="text-center text-lg font-semibold">
          Latest Transactions
        </h3>
      </Flex>

      <Flex className="flex-col gap-6 py-4">
        {transactions.map(({ name, amount, date }, index) => (
          <Flex key={index} className="items-center justify-between gap-6">
            <div className="rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 p-[2px]">
              <Avatar
                size="lg"
                src={`https://i.pravatar.cc/150?u=a042581f4e29026024d&img=${index}`}
                className="bg-white"
              />
            </div>
            <span className="text-sm font-semibold">{name}</span>
            <span className="text-xs text-green-600">{amount}</span>
            <span className="text-xs text-default-500">{date}</span>
          </Flex>
        ))}
      </Flex>
    </CardBody>
  </Card>
);

const transactions = [
  { name: "Jose Perez", amount: "4500 USD", date: "9/20/2021" },
  { name: "Andrew Steven", amount: "4500 USD", date: "9/20/2021" },
  { name: "Ruben Garcia", amount: "1500 USD", date: "2/20/2022" },
  { name: "Perla Garcia", amount: "200 USD", date: "3/20/2022" },
  { name: "Mathew Funez", amount: "2444 USD", date: "5/20/2022" },
  { name: "Carlos Diaz", amount: "3000 USD", date: "12/20/2022" },
];
