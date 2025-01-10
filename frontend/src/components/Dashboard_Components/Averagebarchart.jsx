import react from "react";
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
import { motion } from "framer-motion";

export default function Averagebarchart({ data }) {
  let average = { likes: 0, comments: 0, shares: 0 };
  data.forEach((d) => {
    average.likes += d.likes;
    average.comments += d.comments;
    average.shares += d.shares;
  });
  average.likes = average.likes / data.length;
  average.comments = average.comments / data.length;
  average.shares = average.shares / data.length;

  const chartData = [
    { name: "Likes", value: Math.floor(average.likes) },
    { name: "Comments", value: Math.floor(average.comments) },
    { name: "Shares", value: Math.floor(average.shares) },
  ];

  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <h2 className='text-lg font-medium mb-4 text-gray-100'>
          Average Engagement
        </h2>
    <div className="h-80">
      <ResponsiveContainer width={'100%'} height={'100%'}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31, 41, 55, 0.8)",
            borderColor: "#4B5563",
          }}
          itemStyle={{ color: "#E5E7EB" }}
          cursor={false}
        />
        <Legend />
        <Bar dataKey="value" fill="#6366f1" />
      </BarChart>
    </ResponsiveContainer>
    </div>
    </motion.div>
  );
}
