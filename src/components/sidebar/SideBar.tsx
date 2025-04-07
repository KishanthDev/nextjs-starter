import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r border-zinc-200 bg-white p-4 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
      <div className="mb-6">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <button className="flex w-full items-center gap-2 rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Avatar
                isBordered
                src="https://i.pravatar.cc/100?u=acme"
                className="h-6 w-6"
              />
              <span className="text-sm font-medium">acme.co</span>
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Company Links">
            <DropdownItem key="twitter">Twitter</DropdownItem>
            <DropdownItem key="facebook">Facebook</DropdownItem>
            <DropdownItem key="instagram">Instagram</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="mb-4">
        <Link
          href="/home"
          className="block rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Home
        </Link>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-zinc-500">
          Main Menu
        </h3>
        <nav className="flex flex-col gap-1">
          <Link
            href="/accounts"
            className="rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Accounts
          </Link>
          <Link
            href="/payments"
            className="rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Payments
          </Link>
          <Link
            href="/balances"
            className="rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Balances
          </Link>
          <Link
            href="/customers"
            className="rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Customers
          </Link>
          <Link
            href="/products"
            className="rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Products
          </Link>
          <Link
            href="/reports"
            className="rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Reports
          </Link>
        </nav>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-zinc-500">
          Developers
        </h3>
        <Link
          href="/test-data"
          className="block rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          G View Test Data
        </Link>
      </div>

      <div>
        <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-zinc-500">
          Update
        </h3>
        <Link
          href="/changelog"
          className="block rounded px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Changelog
        </Link>
      </div>
    </aside>
  );
}
