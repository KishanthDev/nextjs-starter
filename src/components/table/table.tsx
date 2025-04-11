"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";

const ITEMS_PER_PAGE = 8;

const CustomPagination = ({
  total,
  currentPage,
  onChange,
}: {
  total: number;
  currentPage: number;
  onChange: (page: number) => void;
}) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <ul className="relative mx-auto mt-4 flex max-w-fit items-center gap-1 overflow-visible rounded-medium">
      <li>
        <Button
          isDisabled={currentPage === 1}
          onPress={() => onChange(currentPage - 1)}
          className="h-8 w-8 bg-default-100 text-[10px] sm:h-9 sm:w-9 sm:text-xs"
        >
          &lt;
        </Button>
      </li>
      {pages.map((p) => (
        <li key={p}>
          <Button
            onPress={() => onChange(p)}
            className={`h-8 w-8 text-[10px] sm:h-9 sm:w-9 sm:text-xs ${
              p === currentPage
                ? "bg-blue-50 text-blue-600 shadow"
                : "bg-default-100"
            }`}
          >
            {p}
          </Button>
        </li>
      ))}
      <li>
        <Button
          isDisabled={currentPage === total}
          onPress={() => onChange(currentPage + 1)}
          className="h-8 w-8 bg-default-100 text-[10px] sm:h-9 sm:w-9 sm:text-xs"
        >
          &gt;
        </Button>
      </li>
    </ul>
  );
};

export const TableWrapper = () => {
  const [page, setPage] = useState(1);
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const pages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(start, end);

  return (
    <div className="w-full overflow-x-auto">
      <Table
        aria-label="Responsive horizontal scroll table"
        isHeaderSticky
        removeWrapper
        classNames={{
          base: "min-w-[700px] w-full",
          table: "w-full text-[10px] sm:text-sm",
          th: "px-2 sm:px-4 py-2 sm:py-3",
          td: "px-2 sm:px-4 py-2",
          wrapper: "max-h-[calc(100vh-200px)] overflow-x-auto scrollbar-hide",
          tr: "data-[selected=true]:bg-blue-50 data-[selected=true]:text-blue-800",
        }}
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) =>
          setSelectedKeys(new Set(keys as Set<string>))
        }
        bottomContent={
          <CustomPagination
            total={pages}
            currentPage={page}
            onChange={(p) => setPage(p)}
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
    </div>
  );
};

export default TableWrapper;
