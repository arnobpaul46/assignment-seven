import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useOutletContext } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const Stats = () => {

  const [friends, timeline,, isLoading] = useOutletContext();

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <PacmanLoader color="#36d7b7" />
    </div>
  );


  // filter section
  const textCount = timeline?.filter(e => e.type === "Text").length || 0;
  const callCount = timeline?.filter(e => e.type === "Call").length || 0;
  const videoCount = timeline?.filter(e => e.type === "Video").length || 0;

  // data from the filter
  const data = [
    { name: 'Text', value: textCount, color: '#8B5CF7' },   
    { name: 'Call', value: callCount, color: '#14532D' },   
    { name: 'Video', value: videoCount, color: '#22C55E' }, 
  ];


  const total = textCount + callCount + videoCount;
  const chartData = total === 0 ? [{ name: 'No Data', value: 1, color: 'gray' }] : data;

  return (
    <div className="w-[85%] md:w-[80%] mx-auto mt-10 mb-10">

      <h1 className="text-4xl font-bold mb-6">Friendship Analytics</h1>


      <div className="card bg-gray-800  rounded-2xl p-6 md:p-10 shadow-sm">

        <h3 className="text-lg font-semibold text-success mb-2">By Interaction Type</h3>

        <div className="w-full h-87">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius="65%"
                outerRadius="90%"
                paddingAngle={12}
                cornerRadius={40}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>


              <Tooltip
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />


              <Legend
                iconType="circle"
                verticalAlign="bottom"
                align="center"
                formatter={(value) => <span className="text-white font-medium mx-2">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;