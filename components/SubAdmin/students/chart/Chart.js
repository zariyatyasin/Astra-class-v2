import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";

export const PieChart = ({ color }) => {
  const data = [
    {
      color: "#F2F6FC",
      id: "blue",
      label: "blue",
      value: 1,
    },
    {
      color: color,
      id: "fuchsia",
      label: "fuchsia",
      value: 2,
    },
  ];
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      valueFormat=" >-"
      startAngle={-43}
      innerRadius={0.6}
      fit={false}
      activeOuterRadiusOffset={8}
      colors={({ data }) => data.color}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.8"]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[]}
    />
  );
};

export const LineChart = ({ color }) => {
  const data = [
    {
      id: "france",
      color: color,
      data: [
        {
          x: "JAN",
          y: 202,
        },
        {
          x: "FEB",
          y: 271,
        },
        {
          x: "MAR",
          y: 79,
        },
        {
          x: "APR",
          y: 176,
        },
        {
          x: "MAY",
          y: 64,
        },
        {
          x: "JUN",
          y: 172,
        },
        {
          x: "JUL",
          y: 150,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 10, bottom: 30, left: 10 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      colors={color}
      curve="natural"
      lineWidth={3}
      yFormat=" >-.2f"
      axisTop={null}
      axisLeft={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,

        legendOffset: 36,
        legendPosition: "middle",
      }}
      pointSize={12}
      pointColor="#ffffff"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor", modifiers: [] }}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
};
