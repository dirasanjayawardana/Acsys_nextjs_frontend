"use client"
import Card from "@/components/home/Card";
import SearchBar from "@/components/home/SearchBar";
import React from "react";
import { sidebarData } from "@/assets/data";

const Page = () => {
    const data = Array.from({ length: 30 }, (_, index) => index);

    return (
        <div>
            <SearchBar />
            <div className="mt-3 grid grid-cols-3 gap-3">
                {sidebarData[1].pages.map((item, index) => (
                    <div key={index} className="">
                        <Card data={item.name} link={item.link}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
