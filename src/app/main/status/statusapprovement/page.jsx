"use client";
import { dummyBodyTable, dummyHeaderTable } from "@/assets/dummyData";
import NotFound from "@/components/NotFound";
import PleaseWait from "@/components/PleaseWait";
import TableApprove from "@/components/status/TableApprove";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [dataLog, setDataLog] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getAllDataLog();
    }, [refresh]);

    const getAllDataLog = async () => {
        setDataLog(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/cabang/log`
            );
            setDataLog(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRefresh = () => {
        setRefresh(!refresh);
        getAllDataLog();
    };

    return (
        <div>
            {dataLog && dataLog.length !==0 ? (
                <TableApprove
                    headers={Object.keys(dataLog[0]).slice(1)}
                    data={dataLog}
                    action={true}
                    isRefresh={handleRefresh}
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Page;
