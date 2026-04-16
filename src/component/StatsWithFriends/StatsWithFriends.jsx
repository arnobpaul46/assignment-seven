import React from "react";
import { useOutletContext, Link } from "react-router-dom";

const StatsWithFriends = () => {
    
    const [friends] = useOutletContext();

    const getStatusClass = (status) => {
        if (status === "overdue") return "bg-error";
        if (status === "almost due") return "bg-warning";
        return "bg-success";
    };

    
    const onTrackCount = friends?.filter((f) => f.status === "on-track").length || 0;
    const onOverdue = friends?.filter((f) => f.status === "overdue").length || 0;

    if (!friends) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="mt-8 w-[80%] mx-auto bg-base-100 ">

            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="card bg-base-200 p-6 text-center shadow hover:bg-base-300">
                    <h2 className="text-2xl font-bold">{friends.length}</h2>
                    <p>Total Friends</p>
                </div>

                <div className="card bg-base-200 p-6 text-center shadow hover:bg-base-300">
                    <h2 className="text-2xl font-bold">{onTrackCount}</h2>
                    <p>On Track</p>
                </div>

                <div className="card bg-base-200 p-6 text-center shadow hover:bg-base-300">
                    <h2 className="text-2xl font-bold">{onOverdue}</h2>
                    <p>Need Attention</p>
                </div>

                <div className="card bg-base-200 p-6 text-center shadow hover:bg-base-300">
                    <h2 className="text-2xl font-bold">12</h2>
                    <p>Interactions This Month</p>
                </div>
            </div>

            {/*  Friends Section  */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Your Friends</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {friends.map((friend) => (
                        
                        <Link to={`/friend/${friend.id}`} key={friend.id}>
                            <div className="card bg-base-200 shadow p-6 text-center hover:scale-105 transition cursor-pointer h-full">

                                {/* Picture */}
                                <div className="avatar mx-auto mb-3">
                                    <div className="w-16 rounded-full">
                                        <img src={friend.picture} alt={friend.name} />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="font-semibold">{friend.name}</h3>
                                <p className="text-sm text-gray-400 mb-2">{friend.days_since_contact}d ago</p>

                                {/* Tag  */}
                                <div className="flex items-center justify-center gap-2 flex-wrap pb-3">
                                    {friend.tags.map((tag, idx) => (
                                        <div key={idx} className="bg-green-700 px-3 py-1 rounded-lg text-white text-xs">
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                {/* Status */}
                                <div className="text-center mt-auto">
                                    <button className={`px-4 py-1 rounded-xl font-semibold text-black ${getStatusClass(friend.status)}`}>
                                        {friend.status}
                                    </button>
                                </div>

                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default StatsWithFriends;