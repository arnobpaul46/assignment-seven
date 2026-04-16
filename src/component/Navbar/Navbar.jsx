import { ChartLine, Clock3, House, Menu } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom"; 

const Navbar = () => {
    
    const activeClass = ({ isActive }) => 
        `btn btn-sm ${isActive ? "btn-success" : "btn-ghost"}`;

    const mobileActiveClass = ({ isActive }) => 
        isActive ? "bg-success text-black rounded-md" : "";

    return (
        <div className="bg-base-300 shadow-md">
            <div className="navbar w-[90%] mx-auto">

                {/* Left */}
                <div className="flex-1">
                    <NavLink to="/" className="text-2xl md:text-3xl font-bold">Keen<span className="text-success">Keeper</span></NavLink>
                </div>

                {/* Mobile Section */}
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-ghost">
                            <Menu size={20} />
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-40 z-[1]">
                            <li>
                                <NavLink to="/home" className={mobileActiveClass}>
                                    <House size={16} /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/timeline" className={mobileActiveClass}>
                                    <Clock3 size={16} /> Timeline
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stats" className={mobileActiveClass}>
                                    <ChartLine size={16} /> Stats
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Desktop Section */}
                <div className="gap-2 hidden md:flex">
                    <NavLink to="/home" className={activeClass}>
                        <House size={16} /> Home
                    </NavLink>

                    <NavLink to="/timeline" className={activeClass}>
                        <Clock3 size={16} /> Timeline
                    </NavLink>

                    <NavLink to="/stats" className={activeClass}>
                        <ChartLine size={16} /> Stats
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Navbar;