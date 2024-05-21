import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { IsConnected } from "../../validation/isConnected";
import React from "react";

const layout = ({ children }) => {
    return (
        <IsConnected>
            <div className="min-h-[100vh] bg-white flex">
                <div className="relative w-[15.8%]">
                    <Sidebar />
                </div>
                <div className="w-[84%] relative pb-10">
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

export default layout;
