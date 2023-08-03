import React from "react";
import { Area, ResponsiveContainer, Tooltip, AreaChart } from "recharts";
import "./LineChart.css";

const LineChartData = () => {
  const data = [
    { name: "2017", $: 100, pv: 3500, amt: 2400 },
    { name: "2018", $: 400, pv: 2400, amt: 2400 },
    { name: "2019", $: 500, pv: 2400, amt: 2400 },
    { name: "2020", $: 50, pv: 2400, amt: 2400 },
    { name: "2021", $: 300, pv: 2400, amt: 2400 },
    { name: "2021", $: 350, pv: 2400, amt: 2400 },
    { name: "2021", $: 480, pv: 2400, amt: 2400 },
    { name: "2021", $: 200, pv: 2400, amt: 2400 },
  ];

  return (
    <div className="shadow-sm  rounded w-100 p-2 p-md-4 line-chart">
      <div className="d-flex justify-content-between pb-3">
        <div>
          <h6>Total Incomes</h6>
          <span className="fs-2 fw-bold"> $18,765</span>
        </div>
        <div className="text-end">
          <h6>+2.6%</h6>
          <span>than last month</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Tooltip />
          <Area
            type="monotone"
            dataKey="$"
            stroke="#027868"
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartData;
