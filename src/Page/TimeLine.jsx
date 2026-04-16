import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Phone, MessageSquare, Video, History } from 'lucide-react';
import { PacmanLoader } from 'react-spinners';

const TimeLine = () => {
  const [friends, timeline,, isLoading] = useOutletContext();


  const [filter, setFilter] = useState("All Interactions");


  if (isLoading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <PacmanLoader color="#36d7b7" />
    </div>
  );


  const filteredTimeline = timeline.filter(event => {
    if (filter === "All Interactions") return true;
    return event.type === filter;
  });

  const getIcon = (type) => {
    if (type === "Call") return <Phone className="text-gray-400" size={24} />;
    if (type === "Text") return <MessageSquare className="text-gray-400" size={24} />;
    if (type === "Video") return <Video className="text-gray-400" size={24} />;
    return <History className="text-gray-400" size={24} />;
  };

  return (
    <div className="w-[80%] mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Timeline</h1>

      {/* Filter dropdown */}
      <div className="mb-8">
        <select
          className="select select-bordered w-full max-w-xs bg-base-200"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All Interactions">All Interactions</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      {/* Timeline  */}
      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <p className="text-gray-500 text-3xl italic">No {filter !== "All Interactions" ? filter.toLowerCase() : ""} interactions found.</p>
        ) : (
          filteredTimeline.map((event) => (
            <div key={event.id} className="flex items-center gap-4 p-4 border border-blue-400 border-dashed rounded-md bg-base-100 hover:shadow-md transition">
              <div className="p-2 bg-base-200 rounded-lg">
                {getIcon(event.type)}
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  {event.type} <span className="font-normal text-gray-500">with <span className="text-success">{event.friendName}</span></span>
                </h3>
                <p className="text-sm text-gray-400">{event.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLine;