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
import dynamic from "next/dynamic";

const DynamicTableWrapper = dynamic(() => Promise.resolve(TableWrapper), {
  ssr: false,
});

const ITEMS_PER_PAGE = 8;

// Define the props interface for CustomPagination
interface CustomPaginationProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

// Custom Pagination Component with typed props
const CustomPagination: React.FC<CustomPaginationProps> = ({
  total,
  page,
  onChange,
}) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <ul className="relative mx-auto mt-4 flex h-fit max-w-fit flex-nowrap items-center gap-0 overflow-visible rounded-medium shadow-sm">
      {/* Previous Button */}
      <li>
        <Button
          isDisabled={page === 1}
          onPress={() => onChange(page - 1)}
          className="h-9 w-9 min-w-9 rounded-medium bg-default-100 text-xs hover:bg-default-200 active:bg-default-300 sm:text-sm"
          aria-label="Previous page"
        >
          &lt;
        </Button>
      </li>

      {/* Page Numbers */}
      {pages.map((p) => (
        <li key={p}>
          <Button
            onPress={() => onChange(p)}
            className={`h-9 w-9 min-w-9 rounded-medium text-xs sm:text-sm ${
              p === page
                ? "bg-blue-50 text-blue-600 shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
                : "bg-default-100 hover:bg-default-200 active:bg-default-300"
            }`}
            aria-label={`Page ${p}`}
          >
            {p}
          </Button>
        </li>
      ))}

      {/* Next Button */}
      <li>
        <Button
          isDisabled={page === total}
          onPress={() => onChange(page + 1)}
          className="h-9 w-9 min-w-9 rounded-medium bg-default-100 text-xs hover:bg-default-200 active:bg-default-300 sm:text-sm"
          aria-label="Next page"
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
    <Table
      aria-label="Example table with custom cells"
      isHeaderSticky
      removeWrapper
      classNames={{
        base: "min-w-[768px] w-full",
        table: "w-full",
        th: "text-xs sm:text-sm px-2 sm:px-4 py-3 h-12 z-0",
        td: "text-xs sm:text-sm px-2 sm:px-4 py-2",
        wrapper: "max-h-[calc(100vh-200px)]",
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
          page={page}
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
  );
};

export default DynamicTableWrapper;
