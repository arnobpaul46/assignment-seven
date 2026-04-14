import { ChartLine, Clock3, House, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("home");

    return (
        <div className=" bg-base-300 shadow-md">
            <div className="navbar w-[90%] mx-auto">

                {/* Left */}
                <div className="flex-1">
                    <a className="text-lg md:text-xl font-bold">KeenKeeper</a>
                </div>

                {/* Mobile Section */}
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-ghost">
                            <Menu size={20} />
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-200 rounded-box w-40">
                            <li>
                                <button onClick={() => setActive("home")} className={active === "home" ? "bg-green-500 text-white rounded-md" : ""}>
                                    <House size={16} /> Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActive("timeline")} className={active === "timeline" ? "bg-green-500 text-white rounded-md" : ""}>
                                    <Clock3 size={16} /> Timeline
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActive("stats")} className={active === "stats" ? "bg-green-500 text-white rounded-md" : ""}>
                                    <ChartLine size={16}  /> Stats
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Desktop Section */}
                <div className=" gap-2 hidden md:flex">
                    <button
                        onClick={() => setActive("home")}
                        className={`btn btn-sm ${active === "home" ? "btn-success" : "btn-ghost"
                            }`}
                    >
                        <House size={16} /> Home
                    </button>

                    <button
                        onClick={() => setActive("timeline")}
                        className={`btn btn-sm ${active === "timeline" ? "btn-success" : "btn-ghost"
                            }`}
                    >
                        <Clock3 size={16}  /> Timeline
                    </button>

                    <button
                        onClick={() => setActive("stats")}
                        className={`btn btn-sm ${active === "stats" ? "btn-success" : "btn-ghost"
                            }`}
                    >
                        <ChartLine size={16} /> Stats
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;