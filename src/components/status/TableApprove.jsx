"use client";
import { useStateContext } from "@/contexts/ContexProvider";
import { IsSaSupervisor, IsSupervisor } from "@/validation/validateGroupAkses";
import axios from "axios";
import React, { useState } from "react";
import { FiCheckSquare, FiXSquare } from "react-icons/fi";

const TableApprove = ({ headers, data, parameter, action, isRefresh }) => {
    
    const handleStatusApprove = async (id, status) => {
        isRefresh();
        try {
            await axios.put(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/${parameter}/log?id=${id}&status=${status}`
            );
        } catch (error) {
            console.log(error);
        }
        isRefresh();
    };

    const statusColor = (status) => {
        if (status.toUpperCase() === "DECLINE") {
            return "font-bold text-red-400";
        } else if (status.toUpperCase() === "APPROVED") {
            return "font-bold text-green-500";
        } else {
            return "font-bold text-yellow-500";
        }
    };

    const convertCronToDate = (cron) => {
        const [seconds, minutes, hours, dayOfMonth, month, dayOfWeek] =
            cron.split(" ");

        const d = new Date();
        d.setSeconds(seconds);
        d.setMinutes(minutes);
        d.setHours(hours);
        d.setDate(dayOfMonth);
        d.setMonth(month - 1);

        return d.toLocaleString();
    };

    return (
        <div className="overflow-auto mx-auto">
            <table className="text-center border-b cursor-pointer min-w-full">
                <thead>
                    <tr className="border-b-2 bg-blue-500 text-white text-sm">
                        {(IsSupervisor() || IsSaSupervisor()) && action && (
                            <th className="py-4 px-4 w-32">Action</th>
                        )}

                        {headers.map((item, index) => (
                            <th key={index} className="py-4 px-3 capitalize">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-black">
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-white" : "bg-blue-100"
                            } hover:bg-gray-100 text-xs leading-5`}
                        >
                            {(IsSupervisor() || IsSaSupervisor()) && action && (
                                <td className="py-1 px-3 w-36 flex items-center justify-center gap-5">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleStatusApprove(
                                                item.id,
                                                "DECLINE"
                                            )
                                        }
                                        disabled={
                                            item.statusApprovement.toUpperCase() !==
                                            "PENDING"
                                        }
                                        className={`flex flex-col gap-1 items-center justify-center pt-2 ${
                                            item.statusApprovement.toUpperCase() !==
                                            "PENDING"
                                                ? "text-gray-500 cursor-not-allowed"
                                                : "text-red-400 cursor-pointer"
                                        }`}
                                    >
                                        <FiXSquare size={20} />
                                        <p className="">Decline</p>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleStatusApprove(
                                                item.id,
                                                "APPROVED"
                                            )
                                        }
                                        disabled={
                                            item.statusApprovement.toUpperCase() !==
                                            "PENDING"
                                        }
                                        className={`flex flex-col gap-1 items-center justify-center pt-2 ${
                                            item.statusApprovement.toUpperCase() !==
                                            "PENDING"
                                                ? "text-gray-500 cursor-not-allowed"
                                                : "text-green-600 cursor-pointer"
                                        }`}
                                    >
                                        <FiCheckSquare size={20} />
                                        <p className="">Approve</p>
                                    </button>
                                </td>
                            )}

                            {headers.map((header, headerIndex) => (
                                <td
                                    key={headerIndex}
                                    className={`py-1 px-3 ${
                                        header === "statusApprovement" &&
                                        statusColor(item.statusApprovement)
                                    }`}
                                >
                                    {header === "scheduleAt" && item[header]
                                        ? convertCronToDate(item[header])
                                        : item[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableApprove;
