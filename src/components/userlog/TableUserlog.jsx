"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import PleaseWait from "../PleaseWait";

const TableUserLog = () => {
    const [dataUserlog, setDataUserlog] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const paginateData = (data) => {
        const lastIndex = currentPage * perPage;
        const firstIndex = lastIndex - perPage;
        return data.slice(firstIndex, lastIndex);
    };

    useEffect(() => {
        const getUserlogData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/userlog`
                );
                setDataUserlog(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUserlogData();
    }, []);

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const statusColor = (status) => {
        if (status.toUpperCase().includes("FAILED")) {
            return "font-bold text-red-400";
        } else if (status.toUpperCase().includes("SUCCESS")) {
            return "font-bold text-green-500";
        } else {
            return "font-bold text-yellow-500";
        }
    };

    return (
        <div>
            {dataUserlog ? (
                <div className="">
                    <table className="w-full text-center mt-5 text-sm">
                        <thead>
                            <tr className="border-b-2 bg-blue-300">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4">Login Time</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4">UserId</th>
                                <th className="py-2 px-4">Group Akses</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginateData(dataUserlog).map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0
                                            ? "bg-white"
                                            : "bg-blue-100"
                                    } hover:bg-gray-100`}
                                >
                                    <td className="py-2 px-4">{currentPage + index}</td>
                                    <td className="py-2 px-4">{formatDateTime(item.loginTime)}</td>
                                    <td className={`py-2 px-4 text-start ${statusColor(item.loginStatus)}`}>{item.loginStatus}</td>
                                    <td className="py-2 px-4">{item.userid}</td>
                                    <td className="py-2 px-4">{item.groupAkses}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-3 w-full flex justify-center items-center gap-3">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="py-2 px-4 rounded-xl bg-blue-500 text-white"
                        >
                            Prev
                        </button>
                        <h5 className="font-semibold">{currentPage}</h5>
                        <button
                            disabled={
                                currentPage === Math.ceil(dataUserlog.length / perPage)
                            }
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="py-2 px-4 rounded-xl bg-blue-500 text-white"
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <PleaseWait />
            )}
        </div>
    );
};

export default TableUserLog;
