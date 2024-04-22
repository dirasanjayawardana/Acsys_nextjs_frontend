"use client";
import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TableUserLog = () => {
    const data = Array.from({ length: 25 }, (_, index) => index + 1);

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const paginateData = () => {
        const lastIndex = currentPage * perPage;
        const firstIndex = lastIndex - perPage;
        return data.slice(firstIndex, lastIndex);
    };

    return (
        <div>
            <table className="w-full text-center mt-5">
                <thead>
                    <tr className="border-b-2 bg-blue-300">
                        <th className="py-2 px-4">No</th>
                        <th className="py-2 px-4">Activities</th>
                        <th className="py-2 px-4">Time</th>
                        <th className="py-2 px-4">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {paginateData(data).map((item, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-white" : "bg-blue-100"
                            } hover:bg-gray-100`}
                        >
                            <td className="py-2 px-4">{item}</td>
                            <td className="py-2 px-4">value{item}</td>
                            <td className="py-2 px-4">value{item}</td>
                            <td className="py-2 px-4">value{item}</td>
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
                    disabled={currentPage === Math.ceil(data.length / perPage)}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="py-2 px-4 rounded-xl bg-blue-500 text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TableUserLog;
