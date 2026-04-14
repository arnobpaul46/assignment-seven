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

                {/* Mobile Dropdown */}
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-ghost">
                            ☰
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-200 rounded-box w-40">
                            <li>
                                <button onClick={() => setActive("home")}>
                                     Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActive("timeline")}>
                                     Timeline
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActive("stats")}>
                                     Stats
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className=" gap-2 hidden md:flex">
                    <button
                        onClick={() => setActive("home")}
                        className={`btn btn-sm ${active === "home" ? "btn-success" : "btn-ghost"
                            }`}
                    >
                         Home
                    </button>

                    <button
                        onClick={() => setActive("timeline")}
                        className={`btn btn-sm ${active === "timeline" ? "btn-success" : "btn-ghost"
                            }`}
                    >
                         Timeline
                    </button>

                    <button
                        onClick={() => setActive("stats")}
                        className={`btn btn-sm ${active === "stats" ? "btn-success" : "btn-ghost"
                            }`}
                    >
                         Stats
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;