"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { IsConnected } from "../../validation/isConnected";
import React from "react";
import { useStateContext } from "@/contexts/ContexProvider";

const Layout = ({ children }) => {
    const { showSideBar } = useStateContext();

    return (
        <IsConnected>
            <div className="min-h-[100vh] bg-white flex">
                <div className={`relative ${showSideBar ? "w-[15.8%]" : "w-[0%]"} `}>
                    <Sidebar />
                </div>
                <div className={`${showSideBar ? "w-[84%]" : "w-[100%]"} relative pb-10`}>
                    <Navbar />
                    <Header />
                    <div className="px-10">
                        <div className="">{children}</div>
                    </div>
                    <Footer />
                </div>
            </div>
        </IsConnected>
    );
};

export default Layout;
