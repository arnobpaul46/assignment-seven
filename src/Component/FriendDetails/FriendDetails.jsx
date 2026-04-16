import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Phone, MessageSquare, Video, Bell, Archive, Trash2 } from "lucide-react";
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";

const FriendDetails = () => {
    const { id } = useParams();
    const [friends, timeline, addTimelineEvent, isLoading] = useOutletContext();

    if (isLoading) return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <PacmanLoader color="#36d7b7" />
        </div>
    );


    const friend = friends.find(f => f.id === Number(id));

    if (!friend) return <div className="text-center mt-20">Friend Loading or Not Found...</div>;

    return (
        <div className="p-6 bg-base-200 w-[80%] mx-auto mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Profile Card */}
                <div>
                    <div className="card bg-base-100 shadow-md p-6 items-center text-center hover:shadow-xl transition duration-300">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <img src={friend.picture} alt={friend.name} />
                            </div>
                        </div>

                        <h2 className="mt-3 font-semibold text-lg">{friend.name}</h2>


                        {/* status */}
                        <div className={`badge mt-2 py-3 px-4  border-none ${friend.status === 'overdue' ? 'bg-error text-white' :
                            friend.status === 'almost due' ? 'bg-warning text-white' :
                                'bg-success text-white'
                            }`}>
                            {friend.status}
                        </div>

                        {/* tag */}
                        <div className="badge mt-2 ">
                            {friend.tags.map((tag, idx) => (
                                <div key={idx} className="bg-success px-3 py-1 rounded-lg text-black text-xs">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <p className="text-sm mt-3 text-gray-500 italic">
                            "{friend.bio}"
                        </p>

                        {/* Preferred */}
                        <p className="text-xs text-gray-400 mt-1">
                            Preferred: <span className="text-gray-300">{friend.email}</span>
                        </p>
                    </div>

                    {/* button section */}
                    <div className="card" >
                        <div className="w-full mt-5 space-y-2">
                            <button className="btn btn-outline btn-sm w-full flex gap-2 hover:border-success">
                                <Bell size={16} /> Snooze
                            </button>

                            {/* Archive button */}
                            <button className="btn btn-outline btn-sm w-full flex gap-2 hover:border-success">
                                <Archive size={16} /> Archive
                            </button>
                            {/* Delete button */}
                            <button className="btn btn-outline btn-sm btn-error w-full flex gap-2 ">
                                <Trash2 size={16} /> Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:col-span-2 space-y-4">

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="card bg-base-100 shadow p-8 text-center hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold">{friend.days_since_contact}</h2>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>

                        <div className="card bg-base-100 shadow p-8 text-center hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold">{friend.goal}</h2>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>

                        <div className="card bg-base-100 shadow p-8 text-center hover:shadow-lg transition">
                            <h2 className="text-2xl font-semibold">{friend.next_due_date}</h2>
                            <p className="text-sm text-gray-500">Next Due</p>
                        </div>
                    </div>

                    {/*  Relationship Goal */}
                    <div className="card bg-base-100 shadow px-6 py-10 flex flex-row justify-between items-center hover:shadow-lg transition">
                        <div>
                            <h3 className="font-semibold text-2xl">Relationship Goal</h3>
                            <p className="text-sm text-gray-500">
                                Connect every <span className="font-bold">30 days</span>
                            </p>
                        </div>
                        <button className="btn btn-sm hover:bg-success">Edit</button>
                    </div>

                    {/* Quick Check-In */}
                    <div className="card bg-base-100 shadow p-5 hover:shadow-lg transition">
                        <h3 className="font-semibold mb-3 text-2xl">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <button onClick={() => { addTimelineEvent("Call", friend.name);toast.success(` ${friend.name} is calling you`,{
                                position: "top-center"
                            });  }} className="btn btn-outline flex flex-col h-18 hover:scale-105 hover:border-success transition">
                                <Phone size={20} /> Call
                                
                            </button>
                            <button onClick={() => { addTimelineEvent("Text", friend.name);  toast.success(` ${friend.name} is Texting you`,{
                                position: "top-center"
                            }); }} className="btn btn-outline flex flex-col h-18 hover:scale-105 hover:border-success transition">
                                <MessageSquare size={20} /> Text
                            </button>
                            <button onClick={() => { addTimelineEvent("Video", friend.name); toast.success(` ${friend.name} is Video calling you`,{
                                position: "top-center"
                            }); }} className="btn btn-outline flex flex-col h-18 hover:scale-105 hover:border-success transition">
                                <Video size={20} /> Video
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;