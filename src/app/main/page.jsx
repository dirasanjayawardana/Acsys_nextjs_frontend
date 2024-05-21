import Card from "@/components/home/Card";
import SearchBar from "@/components/home/SearchBar";
import React from "react";

const page = () => {
    const data = Array.from({ length: 30 }, (_, index) => index);

    return (
        <div>
            <SearchBar />
            <div className="mt-3 grid grid-cols-5 gap-3">
                {data.map((item, index) => (
                    <div key={index} className="">
                        <Card data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
