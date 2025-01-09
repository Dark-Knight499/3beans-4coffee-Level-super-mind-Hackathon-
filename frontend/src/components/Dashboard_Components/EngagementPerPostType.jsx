import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#8B5CF6', '#EC4899', '#10B981'];

const EngagementPerPostType = ({ DistributionData }) => {
  if (!DistributionData || DistributionData.length === 0) {
    return <p className="text-gray-100">No data available to display.</p>;
  }

  // Transform data to calculate engagement values per post type
  const processedData = Object.values(
    DistributionData.reduce((acc, { postType, likes, comments, shares }) => {
      if (!acc[postType]) {
        acc[postType] = { name: postType, value: 0 }; // `name` is required for labels and legend
      }
      acc[postType].value += likes + comments + shares;
      return acc;
    }, {})
  );

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Engagement Distribution (Per Post Type)
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={processedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {processedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend
              formatter={(value) => (
                <span style={{ color: '#E5E7EB' }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default EngagementPerPostType;
