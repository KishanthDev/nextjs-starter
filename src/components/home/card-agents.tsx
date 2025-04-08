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
  <Card className="h-[275px] w-[375px] rounded-xl bg-default-50 shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300">
    <CardBody className="flex flex-col items-center justify-center gap-4 p-6">
      {/* Title */}
      <div className="flex w-full justify-center">
        <div className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-default-300 px-4 py-2">
          <span className="text-xl">⭐</span>
          <h3 className="m-0 text-lg font-bold">Agents</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-sm text-default-500">
        Meet your agenda and see their ranks to get the best results
      </p>

      {/* Avatar Group with gradient borders and hover-right effect */}
      <div className="flex -space-x-4 pt-2">
        {pictureUsers.map((url, index) => (
          <div
            key={index}
            className="relative z-10 transition-transform hover:translate-x-[-0.75rem] hover:z-50 duration-300"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px]">
              <div className="h-full w-full rounded-full bg-white">
                <Avatar
                  src={url}
                  size="lg"
                  className="h-full w-full rounded-full"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Extra count */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-xs text-white ring-2 ring-white">
          +{12 - pictureUsers.length}
        </div>
      </div>
    </CardBody>
  </Card>
);
