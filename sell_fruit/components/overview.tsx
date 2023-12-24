"use client";
interface OverviewProps {
  data: any[]
}

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const Overview: React.FC<OverviewProps> = ({
  data
}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}
        width={500}
        height={300}
      >
        <XAxis dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#3498db" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Overview