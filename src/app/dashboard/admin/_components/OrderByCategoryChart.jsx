import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const data = [
  {
    name: "Double Door",
    uv: 5000,
    pv: 15400,
    amt: 1100,
  },
  {
    name: "Single Door",
    uv: 3000,
    pv: 8400,
    amt: 2210,
  },
  {
    name: "Custom",
    uv: 2000,
    pv: 3400,
    amt: 2290,
  },
];

const OrderByCategoryChart = () => {
  return (
    <BarChart
      style={{
        width: "100%",
        height: "400px",
        aspectRatio: 1.618,
      }}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
      responsive
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Bar dataKey="pv" fill="#21bba2" radius={[8, 8, 0, 0]} />
    </BarChart>
  );
};

export default OrderByCategoryChart;
