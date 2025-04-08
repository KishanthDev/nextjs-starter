import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

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
      animateGradually: { enabled: true, delay: 150 },
      dynamicAnimation: { enabled: true, speed: 300 },
    },
    sparkline: { enabled: false },
    brush: { enabled: false },
    id: "basic-bar",
    fontFamily: "Inter, sans-serif",
    foreColor: "var(--nextui-colors-accents9)",
    stacked: true,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  annotations: {
    yaxis: [
      { y: 200, borderColor: "#334155" },
      { y: 150, borderColor: "#334155" },
      { y: 100, borderColor: "#334155" },
      { y: 50, borderColor: "#334155" },
    ],
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
    labels: {
      style: {
        colors: "var(--nextui-colors-accents8)",
        fontFamily: "Inter, sans-serif",
      },
    },
    axisBorder: { color: "var(--nextui-colors-border)" },
    axisTicks: { color: "var(--nextui-colors-border)" },
  },
  yaxis: {
    labels: {
      style: {
        colors: "var(--nextui-colors-accents8)",
        fontFamily: "Inter, sans-serif",
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid: {
    show: true,
    borderColor: "var(--nextui-colors-border)",
    strokeDashArray: 0,
    position: "back",
  },
  stroke: {
    curve: "smooth",
    width: 2,
    colors: ["#3b82f6", "#10b981"], // Blue and Green
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.05,
      colorStops: [
        [
          {
            offset: 0,
            color: "#93c5fd", // light blue
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#93c5fd",
            opacity: 0.05,
          },
        ],
        [
          {
            offset: 0,
            color: "#6ee7b7", // light green
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#6ee7b7",
            opacity: 0.05,
          },
        ],
      ],
    },
  },
  markers: { size: 0 },
  tooltip: { enabled: false },
  legend: {
    labels: {
      colors: "var(--nextui-colors-foreground)",
    },
  },
};

export const Steam = () => (
  <div className="w-full overflow-x-auto sm:overflow-visible">
    <div id="chart" className="min-w-[350px] sm:min-w-0 sm:w-full">
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

