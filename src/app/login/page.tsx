"use client";

import React from "react";
import Link from "next/link";
import LoginForm from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 p-4 dark:from-gray-800 dark:to-gray-900 md:p-8">
      <div
        className={`w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl transition-colors duration-300 dark:border-gray-700/20 dark:bg-gray-800`}
      >
        <div className="space-y-6">
          <div className="mb-4 flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Please sign in to continue
            </p>
          </div>

          <LoginForm />

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">
              Don't have an account?
            </span>
            <Link
              href="/signup"
              className="rounded font-medium text-blue-600 hover:text-blue-500 focus:outline-none dark:text-blue-400 dark:hover:text-blue-300"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
