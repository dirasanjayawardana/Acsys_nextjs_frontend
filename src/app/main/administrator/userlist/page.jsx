"use client";
import PleaseWait from "@/components/PleaseWait";
import FormSearch from "@/components/userlist/FormSearch";
import TableUser from "@/components/userlist/TableUser";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [dataUser, setDatauser] = useState(null);

    useEffect(() => {
        getDataUser();
    }, []);

    const getDataUser = async () => {
        setDatauser(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/useracsys`
            );
            setDatauser(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex flex-col">
            <FormSearch />
            {dataUser ? (
                <div className="w-full mt-5">
                    <TableUser
                        headers={Object.keys(dataUser[0])}
                        data={dataUser}
                    />
                </div>
            ) : (
                <PleaseWait />
            )}
        </div>
    );
};

export default Page;
