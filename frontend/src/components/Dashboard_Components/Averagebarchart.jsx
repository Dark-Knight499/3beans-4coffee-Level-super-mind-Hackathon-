import react from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Averagebarchart ({data}) {
    let average = {likes: 0, comments: 0, shares: 0};
    data.forEach((d) => {
        
        average.likes += d.likes;
        average.comments += d.comments;
        average.shares += d.shares;
    })
    average.likes = average.likes / data.length;
    average.comments = average.comments / data.length;
    average.shares = average.shares / data.length;

    const chartData = [
        { name: "Likes", value: average.likes },
        { name: "Comments", value: average.comments },
        { name: "Shares", value: average.shares },
      ];
      
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip" style={{ backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
              <p className="label" style={{ fontWeight: "bold", color:'black' }}>{`${label}`}</p>
              <p className="value" style={{ color: "#8884d8" }}>{`${payload[0].value}`}</p>
            </div>
          );
        }
    }
      return (
        <ResponsiveContainer width={500} height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis  />
            <Tooltip content={<CustomTooltip/>} cursor={false}/>
            <Legend />
            <Bar dataKey="value" fill="gray"  />
                
          </BarChart>
        </ResponsiveContainer>
      );
}