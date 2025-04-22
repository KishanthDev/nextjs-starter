"use client";

import React from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const router = useRouter()


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("login", "true");

    localStorage.setItem("userEmail", email);
    localStorage.setItem("rememberMe", rememberMe.toString());

    console.log("Login:", { email, password, rememberMe });
    router.push("/dashboard")
  };

  return (
    <form
      className="w-full flex flex-col gap-4 py-4 h-full animate-in fade-in duration-300 ease-in-out"
      onSubmit={handleLogin}
    >
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="w-5 h-5 text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="w-5 h-5 text-gray-400" />
          </div>
          <input
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={isVisible ? "text" : "password"}
            className="w-full pl-10 pr-10 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setIsVisible((v) => !v)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
          >
            {isVisible ? (
              <EyeOff className="w-5 h-5 text-gray-400" />
            ) : (
              <Eye className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Remember me + Forgot password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Remember me
          </label>
        </div>
        <button
          type="button"
          className="text-sm text-blue-600 hover:text-blue-500 focus:outline-none"
        >
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Log In
      </button>
    </form>
  );
}