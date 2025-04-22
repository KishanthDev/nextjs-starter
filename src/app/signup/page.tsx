"use client";

import React from "react";
import Link from "next/link";
import SignupForm from "@/components/signup/signup-form";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 p-4 dark:from-gray-800 dark:to-gray-900 md:p-8">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
        <div className="space-y-6 p-6">
          <div className="mb-4 flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Account
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up to get started
            </p>
          </div>

          <SignupForm />

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">
              Already have an account?
            </span>
            <Link
              href="/login"
              className="rounded font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
