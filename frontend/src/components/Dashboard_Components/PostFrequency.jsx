import React from 'react'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const PostFrequency = ({PostFrequencyPerMonth}) => {

  const groupByMonthAndYear = (data) => {
    const monthYearMap = {};
    data.forEach((d) => {
      const date = new Date(d.datetime);
      const monthYear = `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`; // e.g., "January 2023"
      
      if (!monthYearMap[monthYear]) {
        monthYearMap[monthYear] = { monthYear, likes: 0, comments: 0, shares: 0 , timestamp: date.getTime(), post: 0 };
      }
      monthYearMap[monthYear].likes += d.likes;
      monthYearMap[monthYear].comments += d.comments;
      monthYearMap[monthYear].shares += d.shares;
      monthYearMap[monthYear].post += 1;

    });
    return Object.values(monthYearMap);
  };
  
  const monthlyDataWithYear = groupByMonthAndYear(PostFrequencyPerMonth).sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div>
      <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className='text-lg font-medium mb-4 text-gray-100'>
          Post Frequency (Per Month)
        </h2>
        <div className='h-80'>
          <ResponsiveContainer
            width={'100%'}
            height={'100%'}
            className={`outline-none`}
          >
            <LineChart data={monthlyDataWithYear}>
              <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
              <XAxis dataKey='monthYear' />
              <YAxis stroke='#9CA3AF' dataKey='post' />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(31, 41, 55, 0.8)',
                  borderColor: '#4B5563'
                }}
                itemStyle={{ color: '#E5E7EB' }}
                formatter={value => [`${value} posts`, 'Total Posts']}
                labelFormatter={label => `Month: ${label}`}
              />
              <Legend />
              <Line
                type='monotone'
                dataKey='post'
                name='No. of Posts per month'
                stroke='#6366f1'
                strokeWidth={3}
                dot={{ r: 6, strokeWidth: 2, fill: '#6366f1' }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}

export default PostFrequency
