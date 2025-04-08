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
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 300,
      },
    },
    sparkline: { enabled: false },
    brush: { enabled: false },
    id: "basic-bar",
    fontFamily: "Inter, sans-serif",
    foreColor: "var(--nextui-colors-accents9)",
    stacked: true,
    toolbar: { show: false },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    labels: {
      style: {
        colors: "var(--nextui-colors-accents8)",
        fontFamily: "Inter, sans-serif",
      },
    },
    axisBorder: {
      color: "var(--nextui-colors-border)",
    },
    axisTicks: {
      color: "var(--nextui-colors-border)",
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "var(--nextui-colors-accents8)",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  tooltip: { enabled: false },
  grid: {
    show: true,
    borderColor: "var(--nextui-colors-border)",
    strokeDashArray: 0,
    position: "back", // ✅ Correctly typed
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    type: "solid",
    colors: ["red"],
  },
  markers: {
    size: 0,
  },
};

export const Steam = () => (
  <div className="z-[5] w-full">
    <div id="chart">
      <Chart options={options} series={series} type="area" height={425} />
    </div>
  </div>
);
