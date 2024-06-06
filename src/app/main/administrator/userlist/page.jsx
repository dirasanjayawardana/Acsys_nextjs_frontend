"use client"
import FormSearch from "@/components/userlist/FormSearch";
import TableUser from "@/components/userlist/TableUser";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [dataUser, setDatauser] = useState("")

    useEffect(() => {
        getDataUser();

    }, [])

    const getDataUser = async() => {
        setDatauser(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/useracsys`
            );
            setDatauser(response.data.data)
            // console.log(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex flex-col">
            <FormSearch />
            <div className="w-full mt-5">
                {/* <TableUser 
                    headers={Object.keys(dataUser[0])}
                    data={dataUser}
                /> */}
            </div>
        </div>
    );
};

export default Page;
