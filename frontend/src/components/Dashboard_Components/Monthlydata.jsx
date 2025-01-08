import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";
  import { ThumbsUp, MessageCircle,Share2 } from 'lucide-react';

  
  export default function Monthlydata({data}) {
    
    const groupByMonthAndYear = (data) => {
        const monthYearMap = {};
        data.forEach((d) => {
          const date = new Date(d.dateOfPost);
          const monthYear = `${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`; // e.g., "January 2023"
          
          if (!monthYearMap[monthYear]) {
            monthYearMap[monthYear] = { monthYear, likes: 0, comments: 0, shares: 0 , timestamp: date.getTime() };
          }
          monthYearMap[monthYear].likes += d.likes;
          monthYearMap[monthYear].comments += d.comments;
          monthYearMap[monthYear].shares += d.shares;

        });
        return Object.values(monthYearMap);
      };
      
      const monthlyDataWithYear = groupByMonthAndYear(data).sort((a, b) => a.timestamp - b.timestamp);
     
    
    
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="bg-white px-4 py-2 shadow-md rounded-md text-center">
              {/* Customize x-axis label text */}
              <p className="text-black">{`${label}`}</p>
              {/* Customize y-axis value text */}
              <div className="text-black flex gap-1 "> <ThumbsUp />{`${payload[0].value}`}</div>
              <div className="text-black flex gap-1 "> <MessageCircle/> {`${payload[1].value}`}</div>
              <div className="text-black flex gap-1 "> <Share2/> {`${payload[2].value}`}</div>
            </div>
          );
        }
        return null;
      };

      const renderLineChart = (
        <LineChart width={800} height={300} data={monthlyDataWithYear}>
          <Line type="monotone" dataKey="likes" stroke="red" />
          <Line type="monotone" dataKey="comments" stroke="blue" />
          <Line type="monotone" dataKey="shares" stroke="green" />
    
          {/* <CartesianGrid stroke="#ccc"  /> */}
          <XAxis dataKey="monthYear" />
          <YAxis domain={[0, "dataMax"]} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </LineChart>
      );

      

      return(
        <div className=" m-4 p-4">{renderLineChart}</div>
      )
}