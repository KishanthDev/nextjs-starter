import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import React from "react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";

export const TableWrapper = () => (
  <div className="w-full [&_.nextui-table-container]:shadow-none">
    <Table
      aria-label="Example table with custom cells"
      isHeaderSticky
      removeWrapper
      classNames={{
        base: "w-full",
        table: "min-w-full",
      }}
      selectionMode="multiple"
      bottomContent={
        <Pagination
          isCompact
          showControls
          total={5}
          page={1}
          onChange={(page) => console.log({ page })}
          className="self-center"
        />
      }
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        ))}
      </TableHeader>

      <TableBody items={users}>
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
