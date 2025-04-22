"use client";

import React from "react";
import Link from "next/link";
import LoginForm from "@/components/login/login-form";

export default function LoginPage() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 md:p-8">
            <div className={`
        w-full max-w-md border 
        shadow-xl 
        dark:border-gray-700/20 
        bg-white dark:bg-gray-800
        transition-colors duration-300
        p-8 rounded-2xl
      `}>
                <div className="space-y-6">
                    <div className="flex flex-col gap-2 text-center mb-4">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Welcome Back
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Please sign in to continue
                        </p>
                    </div>

                    <LoginForm />

                    <div className="flex items-center justify-center gap-2 mt-4">
                        <span className="text-gray-500 dark:text-gray-400">
                            Don't have an account?
                        </span>
                        <Link
                            href="/signup"
                            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:outline-none rounded"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}