"use client";
import NotFound from "@/components/NotFound";
import PleaseWait from "@/components/PleaseWait";
import TabSelectStatus from "@/components/status/TabSelectStatus";
import TableApprove from "@/components/status/TableApprove";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [dataLog, setDataLog] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("PENDING");

    useEffect(() => {
        getAllDataLog();
    }, [refresh, selectedStatus]);

    const getAllDataLog = async () => {
        setDataLog(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/produk/log/find?status-approvement=${selectedStatus}`
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
            <TabSelectStatus selectedData={selectedStatus} setSelectedData={setSelectedStatus} />
            {dataLog ? (
                dataLog.length !== 0 ? (
                    <TableApprove
                        headers={Object.keys(dataLog[0]).slice(1)}
                        data={dataLog}
                        parameter={"produk"}
                        action={true}
                        isRefresh={handleRefresh}
                    />
                ) : (
                    <NotFound />
                )
            ) : (
                <PleaseWait />
            )}
        </div>
    );
};

export default Page;
