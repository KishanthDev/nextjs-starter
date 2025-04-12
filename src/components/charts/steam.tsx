"use client";
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";

export const Steam = () => {
  const { theme } = useTheme(); // Get the current theme from next-themes
  const isDark = theme === "dark";

  const series = [
    {
      name: "Series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      animations: {
        animateGradually: { enabled: false }, // Disable gradual animation to reduce reflows
        dynamicAnimation: { enabled: false }, // Disable dynamic animation
      },
      sparkline: { enabled: false }, // If sparkline is not needed, turn it off
      brush: { enabled: false },
      id: "basic-bar",
      fontFamily: "Inter, sans-serif",
      foreColor: isDark ? "#d4d4d8" : "#64748b", // zinc-300 (dark), slate-500 (light)
      stacked: true,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    annotations: {
      yaxis: [
        { y: 200, borderColor: isDark ? "#64748b" : "#334155" },
        { y: 150, borderColor: isDark ? "#64748b" : "#334155" },
        { y: 100, borderColor: isDark ? "#64748b" : "#334155" },
        { y: 50, borderColor: isDark ? "#64748b" : "#334155" },
      ],
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
      labels: {
        style: {
          colors: isDark ? "#9ca3af" : "#64748b",
          fontFamily: "Inter, sans-serif",
        },
      },
      axisBorder: { color: isDark ? "#6b7280" : "#e5e7eb" },
      axisTicks: { color: isDark ? "#6b7280" : "#e5e7eb" },
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#9ca3af" : "#64748b",
          fontFamily: "Inter, sans-serif",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      show: false, // Disable grid lines to reduce DOM elements
      borderColor: isDark ? "#6b7280" : "#e5e7eb",
      strokeDashArray: 0,
      position: "back",
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#3b82f6", "#10b981"], // Blue and Green (unchanged)
    },
    fill: {
      type: "solid", // Simplified fill, remove gradient
    },
    markers: { size: 0 }, // Remove markers
    tooltip: { enabled: false }, // Disable tooltips
    legend: {
      labels: {
        colors: isDark ? "#d4d4d8" : "#1f2937",
      },
    },
    dataLabels: {
      enabled: false, // Remove numbers on graph lines
    },
  };

  return (
    <div className="w-full overflow-x-auto sm:overflow-visible">
      <div
        id="chart"
        className={`min-w-[350px] sm:w-full sm:min-w-0 ${isDark ? "bg-gray-900" : "bg-white"
          }`}
      >
        <Chart
          options={options}
          series={series}
          type="area"
          height={300}
          width="100%"
        />
      </div>
    </div>
  );
};
