"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";
import dynamic from "next/dynamic";

const DynamicTableWrapper = dynamic(() => Promise.resolve(TableWrapper), {
  ssr: false,
});

const ITEMS_PER_PAGE = 8;

export const TableWrapper = () => {
  const [page, setPage] = useState(1);
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const pages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(start, end);

  return (
    <Table
      aria-label="Example table with custom cells"
      isHeaderSticky
      removeWrapper
      classNames={{
        base: "min-w-[768px] w-full",
        table: "w-full",
        th: "text-xs sm:text-sm px-2 sm:px-4 py-3 h-12", // Increased height
        td: "text-xs sm:text-sm px-2 sm:px-4 py-2",
        wrapper: "max-h-[calc(100vh-200px)]",
        // Style for selected rows
        tr: "data-[selected=true]:bg-blue-50 data-[selected=true]:text-blue-800",
      }}
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={(keys) => setSelectedKeys(new Set(keys as Set<string>))}
      bottomContent={
        <Pagination
          isCompact
          showControls
          total={pages}
          page={page}
          onChange={(p) => setPage(p)}
          classNames={{
            wrapper: "mx-auto mt-4",
            item: "data-[active=true]:text-blue-600 data-[active=true]:shadow-[0_4px_12px_rgba(59,130,246,0.3)] data-[active=true]:bg-blue-50 text-xs sm:text-sm",
          }}
          className="self-center"
        />
      }
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.uid !== "actions"}
          >
            {column.name}
          </TableColumn>
        ))}
      </TableHeader>

      <TableBody items={paginatedUsers}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{RenderCell({ user: item, columnKey })}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DynamicTableWrapper;