"use client"
import { useStateContext } from "@/contexts/ContexProvider";
import React from "react";
import { FiMenu, FiUser } from "react-icons/fi";

const Navbar = () => {

    const {showSideBar, setShowSideBar} = useStateContext();

    return (
        <div className="flex justify-between w-full shadow-md h-[60px] rounded-b-xl items-center px-8 sticky top-0 bg-white/80">
            <button onClick={() => setShowSideBar(!showSideBar)}>
                <FiMenu size={24} />
            </button>
            <div className="p-1 rounded-full border-2 border-gray-700">
                <FiUser size={22} />
            </div>
        </div>
    );
};

export default Navbar;
