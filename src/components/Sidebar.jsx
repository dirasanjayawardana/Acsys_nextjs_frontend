"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { sidebarAdmin, sidebarData } from "@/assets/data";
import { useStateContext } from "@/contexts/ContexProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
    const { showSideBar, setShowSideBar, setHeader } = useStateContext();

    const pathname = usePathname();

    const [showApps, setShowApps] = useState(true);

    return (
        <div
            className={`${
                showSideBar
                    ? "w-[300px] h-[100vh] overflow-hidden hover:overflow-y-auto shadow-xl sticky top-0 transition-all"
                    : "w-0 -translate-x-64 h-[100vh] overflow-hidden hover:overflow-y-auto shadow-xl sticky top-0 transition-all"
            }`}
        >
            <div className="flex items-center justify-around">
                <div className="w-40">
                    <Image src={logo} alt="logo" />
                </div>
                <button onClick={() => setShowSideBar(false)}>
                    <IoIosArrowBack size={20} />
                </button>
            </div>

            <div className="p-8 flex flex-col gap-3">
                {sidebarData.map((items, index) => (
                    <div key={index} className="">
                        <div className="font-bold text-xl text-gray-500 flex justify-between items-center">
                            <h1>{items.header}</h1>
                            {items.header === "Applications" && (
                                <button onClick={() => setShowApps(!showApps)} className="p-2 rounded-xl hover:bg-gray-200">
                                    {showApps ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
                                    
                                </button>
                            )}
                        </div>

                        {items.pages.map((item, index) => (
                            <div key={index}
                            className={`transition-all duration-300 ${
                                items.header === "Applications" && !showApps ? "hidden opacity-0 -translate-y-10 pointer-events-none absolute" : "opacity-100 pointer-events-auto"
                            }`}>
                            <Link
                                
                                href={item.link}
                                onClick={() => setHeader(item.name)}
                            >
                                <div
                                    className={`${
                                        pathname === item.link
                                            ? "bg-blue-500 text-white font-bold"
                                            : ""
                                    } flex items-center gap-2 mt-2 ml-3 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-xl hover:font-bold`}
                                >
                                    {item.icon}
                                    <h3>{item.name}</h3>
                                </div>
                            </Link>
                            </div>
                        ))}
                    </div>
                ))}

                {sidebarAdmin.map((items, index) => (
                    <div key={index} className="">
                        <h1 className="font-bold text-xl text-gray-500">
                            {items.header}
                        </h1>

                        {items.pages.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={() => setHeader(item.name)}
                            >
                                <div
                                    className={`${
                                        pathname === item.link
                                            ? "bg-blue-500 text-white font-bold"
                                            : ""
                                    } flex items-center gap-2 mt-2 ml-3 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-xl hover:font-bold`}
                                >
                                    {item.icon}
                                    <h3>{item.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
                <Link href="/login">
                    <div className="flex items-center gap-2 mt-2 hover:bg-blue-500 hover:text-white px-3 py-2 hover:font-bold font-semibold border-t-2 border-gray-400">
                        <FiLogOut />
                        <h3>Logout</h3>
                    </div>
                </Link>
            </div>

            <div className="text-center">
                <p className="text-gray-400 text-sm">---Always Control---</p>
            </div>
        </div>
    );
};

export default Sidebar;
