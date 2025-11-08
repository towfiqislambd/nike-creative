import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const data = [
  {
    name: "Double Door",
    uv: 8000,
    pv: 15400,
    amt: 1100,
  },
  {
    name: "Single Door",
    uv: 6000,
    pv: 8400,
    amt: 2210,
  },
  {
    name: "Custom",
    uv: 4000,
    pv: 3400,
    amt: 2290,
  },
  {
    name: "Installation Supplies",
    uv: 8000,
    pv: 4400,
    amt: 2290,
  },
  {
    name: "Warehouse Rent",
    uv: 16000,
    pv: 7400,
    amt: 2290,
  },
  {
    name: "Utilities",
    uv: 5000,
    pv: 2400,
    amt: 2290,
  },
  {
    name: "Employee Costs",
    uv: 8000,
    pv: 6400,
    amt: 2290,
  },
  {
    name: "Other/Payables",
    uv: 8000,
    pv: 4400,
    amt: 2290,
  },
];

const ProductionCosts = () => {
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

export default ProductionCosts;
