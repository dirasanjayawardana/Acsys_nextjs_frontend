"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { sidebarAdmin, sidebarData } from "@/assets/data";
import { useStateContext } from "@/contexts/ContexProvider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import PleaseWait from "./PleaseWait";
import { IsSaOperator, IsSaSupervisor } from "@/validation/validateGroupAkses";

const Sidebar = () => {
    const router = useRouter();
    const { showSideBar, setShowSideBar, setHeader } = useStateContext();

    const pathname = usePathname();
    const [showApps, setShowApps] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const userid = document.cookie
                .split("; ")
                .find((row) => row.startsWith("ACSYS-USERID="))
                ?.split("=")[1];
            await axios.post(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/logout?userid=${userid}`
            );
            document.cookie = "ACSYS-USERID=; Max-Age=0; Path=/";
            router.push("/login");
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <div className="sticky top-0">
            {!isLoading ? (
                <div
                    className={`${
                        showSideBar
                            ? "w-[300px] min-h-[100vh] overflow-hidden hover:overflow-y-auto shadow-xl sticky top-0 transition-all"
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
                                        <button
                                            onClick={() =>
                                                setShowApps(!showApps)
                                            }
                                            className="p-2 rounded-xl hover:bg-gray-200"
                                        >
                                            {showApps ? (
                                                <IoIosArrowUp size={16} />
                                            ) : (
                                                <IoIosArrowDown size={16} />
                                            )}
                                        </button>
                                    )}
                                </div>

                                {items.pages.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-300 ${
                                            items.header === "Applications" &&
                                            !showApps
                                                ? "hidden opacity-0 -translate-y-10 pointer-events-none absolute"
                                                : "opacity-100 pointer-events-auto"
                                        }`}
                                    >
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

                        {(IsSaOperator() || IsSaSupervisor()) && sidebarAdmin.map((items, index) => (
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
                        <button
                            type="button"
                            className="flex items-center gap-2 mt-2 hover:bg-blue-500 hover:text-white rounded-xl px-3 py-2 hover:font-bold font-semibol"
                            onClick={handleLogout}
                        >
                            <FiLogOut />
                            <h3>Logout</h3>
                        </button>
                    </div>

                    <div className="text-center mt-10">
                        <p className="text-gray-400 text-sm">
                            ---Always Control---
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex items-start justify-center min-h-screen p-7">
                    <PleaseWait />
                </div>
            )}
        </div>
    );
};

export default Sidebar;
