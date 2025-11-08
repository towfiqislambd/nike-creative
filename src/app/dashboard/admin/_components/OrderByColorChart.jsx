"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
const COLORS = ["#070707", "#404040", "#ddd"];

const data = [
  { name: "Dark Bronze", value: 400 },
  { name: "White", value: 300 },
  { name: "Black", value: 300 },
];

export default function OrderByColorChart() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Pie Chart */}
      <ResponsiveContainer width={220} height={270}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={110}
            stroke="none"
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={24}
            fontWeight="bold"
          >
            {Math.round(
              (data[0].value / data.reduce((a, b) => a + b.value, 0)) * 100
            )}
            %
          </text>
        </PieChart>
      </ResponsiveContainer>

      {/* Legend / Labels */}
      <div className="space-y-3">
        {data?.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2">
              <div
                className="w-3.5 h-3.5 rounded-[2px]"
                style={{ background: COLORS[index % COLORS.length] }}
              />
              <span>{item.name}</span>
              <span className="text-sm text-gray-500">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
