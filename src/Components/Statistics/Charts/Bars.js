import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function BarsChart({ data }) {
  try {
    return (
      <ResponsiveContainer width={'99%'} height={200}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 55,
            bottom: 5,
          }}
          maxBarSize={50}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} unit="%" />
          <Tooltip />
          <Legend />

          <Bar dataKey="Porcentaje" stackId="a" fill="#444857" />
        </BarChart>
      </ResponsiveContainer>
    )
  } catch (err) {
    console.error(err)
  }
}
