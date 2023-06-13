import React, { useEffect, useState, useCallback } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

const EventGenre = ({ events }) => {
  const [data, setData] = useState([])

  const getData = useCallback(() => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS']

    const data = genres.map((genre, index) => {
      const value = events.filter(({ summary }) =>
        summary.split(' ').includes(genre)
      ).length

      return { name: genre, value, fill: colors[index] }
    })

    return data
  }, [events]) // Dependency for useCallback

  useEffect(() => {
    setData(getData())
  }, [getData]) // Dependency for useEffect

  return (
    <ResponsiveContainer height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          outerRadius={80}
          label={({ percent }) => `${(percent * 100).toFixed(0)} %`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          layout="horizontal"
          formatter={(value, entry, index) => (
            <span style={{ color: entry.color }}>{entry.payload.name}</span>
          )}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre
