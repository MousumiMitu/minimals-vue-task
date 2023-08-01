import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jav",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "Feb",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Mar",
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: "Apl",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "May",
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: "Jun",
    uv: 23,
    pv: 38,
    amt: 2,
  },
  {
    name: "July",
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

const BarChartData = () => {
  return (
    <div className="shadow-sm  rounded">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: "30px",
            }}
          />
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" stroke="#C1C8D0" />
          <YAxis stroke="#C1C8D0" />
          <Tooltip />
          <Bar
            dataKey="pv"
            fill="#3ACC91"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="uv"
            fill="#F1CDA5"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartData;
