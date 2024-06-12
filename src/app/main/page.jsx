"use client";
import Card from "@/components/home/Card";
import SearchBar from "@/components/home/SearchBar";
import React from "react";
import { sidebarData } from "@/assets/data";

const Page = () => {
  const data = Array.from({ length: 30 }, (_, index) => index);

  return (
    <div>
      <SearchBar />
      <div className="mt-5 grid grid-cols-3 gap-3">
        {sidebarData[1].pages.map((item, index) => (
          <div key={index} className="">
            <Card data={item.name} link={item.link} />
          </div>
        ))}
      </div>
      <div className="">
        <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 text-lg mt-12">
          <h1>Status Approvement</h1>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-base	">
          {sidebarData[2].pages.map((item, index) => (
            <div key={index}>
              <Card data={item.name} link={item.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
