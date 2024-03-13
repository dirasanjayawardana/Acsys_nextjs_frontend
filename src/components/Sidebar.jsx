import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";


const Sidebar = () => {
    return (
        <div className="w-[300px] min-h-[100vh] shadow-xl">
            <div className="flex">
                {/* <Image src={logo} alt="logo" /> */}
                <IoIosArrowBack  size={20}/>
            </div>
        </div>
    );
};

export default Sidebar;
