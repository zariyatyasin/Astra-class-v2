import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const AttendanceChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const previousChartRef = useRef(null);
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      let chartInstance = null;
      if (previousChartRef.current) {
        chartInstance = previousChartRef.current;
        chartInstance.destroy();
      }
      const newChartInstance = new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [
            {
              label: "Present",
              data: [50, 70, 85, 90],
              backgroundColor: "rgb(36, 197, 94)",
              borderColor: "rgb(36, 197, 94)",
              borderWidth: 1,
            },
            {
              label: "Absent",
              data: [57, 10, 30, 3],
              backgroundColor: "rgb(60, 130, 246)",
              borderColor: "rgb(60, 130, 246)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      previousChartRef.current = newChartInstance;
    }
  }, [chartRef]);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: "100%", height: "240px" }} />
    </div>
  );
};

export default AttendanceChart;
