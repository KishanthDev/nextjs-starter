"use client";

import React from "react";
import Link from "next/link";
import SignupForm from "@/components/signup/signup-form";

export default function SignupPage() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 md:p-8">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 space-y-6">
                    <div className="flex flex-col gap-2 text-center mb-4">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Create Account
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Sign up to get started
                        </p>
                    </div>

                    <SignupForm />

                    <div className="flex items-center justify-center gap-2 mt-4">
                        <span className="text-gray-500 dark:text-gray-400">
                            Already have an account?
                        </span>
                        <Link
                            href="/login"
                            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium  rounded"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}