import Card from "@/components/home/Card";
import SearchBar from "@/components/home/SearchBar";
import React from "react";

const page = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            <SearchBar />
            <div className="mt-3 grid grid-cols-3 gap-3">
                {data.map((item, index) => (
                  <div key={index} className="">
                    <Card />
                  </div>
                ))}
            </div>
        </div>
    );
};

export default page;
