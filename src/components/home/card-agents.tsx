"use client";

import React from "react";
import { Avatar, Card, CardBody } from "@nextui-org/react";

const pictureUsers = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];

export const CardAgents = () => (
  <Card className="h-[275px] w-[375px] rounded-xl bg-default-50 shadow-md">
    <CardBody className="flex flex-col items-center justify-center gap-4 p-6">
      {/* Title */}
      <div className="flex w-full justify-center">
        <div className="flex items-center justify-center gap-2 rounded-md border-2 border-dashed border-default-300 px-4 py-2">
          <span className="text-xl">⭐</span>
          <h3 className="m-0 text-lg font-semibold">Agents</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-sm text-default-500">
        Meet your agenda and see their ranks to get the best results
      </p>

      {/* Manual Avatar Group */}
      <div className="flex -space-x-4 pt-2">
        {pictureUsers.map((url, index) => (
          <Avatar
            key={index}
            src={url}
            size="lg"
            isBordered
            color="primary"
            className="ring-2 ring-white"
          />
        ))}
        {/* Extra count (if needed) */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm text-white ring-2 ring-white">
          +{12 - pictureUsers.length}
        </div>
      </div>
    </CardBody>
  </Card>
);
