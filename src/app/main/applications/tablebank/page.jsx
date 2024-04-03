import Table from "@/components/Table";
import FormSearch from "@/components/tablebank/FormSearch";
import React from "react";

const page = () => {

    const headers = ["Kode Bank","Nama Bank","Alias"];
    const data = [1, 2, 3, 4, 5, 6,7,8,9,10];
    
    return (
        <div>
            <FormSearch />
            <div className="w-full mt-5">
                <Table headers={headers} data={data}/>
            </div>
        </div>
    );
};

export default page;
