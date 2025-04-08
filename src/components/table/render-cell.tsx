"use client";

import React from "react";
import { Tooltip } from "@nextui-org/react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { users } from "./data";
import { IconButton, StyledBadge } from "./table.styled";

interface Props {
  user: (typeof users)[number];
  columnKey: string | React.Key;
}

export const RenderCell = ({ user, columnKey }: Props) => {
  const cellValue = user[columnKey as keyof typeof user];

  switch (columnKey) {
    case "name":
      return (
        <div className="flex items-center gap-2">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-8 w-8 rounded-md object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-default-500">{user.email}</span>
          </div>
        </div>
      );

    case "role":
      return (
        <div className="flex flex-col">
          <span className="text-sm font-semibold capitalize">{user.role}</span>
          <span className="text-xs capitalize text-default-500">
            {user.team}
          </span>
        </div>
      );

    case "status":
      return (
        <StyledBadge type={user.status as "active" | "paused" | "vacation"}>
          {user.status}
        </StyledBadge>
      );

    case "actions":
      return (
        <div className="flex items-center justify-center gap-2">
          <Tooltip content="Details" placement="top">
            <IconButton onClick={() => console.log("View user", user.id)}>
              <EyeIcon size={20} fill="#979797" />
            </IconButton>
          </Tooltip>

          <Tooltip content="Edit user" placement="top">
            <IconButton onClick={() => console.log("Edit user", user.id)}>
              <EditIcon size={20} fill="#979797" />
            </IconButton>
          </Tooltip>

          <Tooltip content="Delete user" placement="top">
            <IconButton onClick={() => console.log("Delete user", user.id)}>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
          </Tooltip>
        </div>
      );

    default:
      return <span>{String(cellValue)}</span>;
  }
};
