import FormSearch from "@/components/userlist/FormSearch";
import TableUser from "@/components/userlist/TableUser";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col">
            <FormSearch />
            <div className="w-full mt-5">
                <TableUser />
            </div>
        </div>
    );
};

export default page;
