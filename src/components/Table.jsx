"use client";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Table = ({ headers, data, action }) => {
    return (
        <div className="overflow-auto mx-auto">
            <table className="text-center border-b cursor-pointer">
                <thead>
                    <tr className="border-b-2 bg-blue-300 text-sm">
                        {action && <th className="py-2 px-4 w-32">Action</th>}
                        {headers.map((item, index) => (
                            <th key={index} className="py-3 px-6 capitalize">
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
                            {action && (
                                <td className="py-3 px-6 w-32 flex items-center justify-center gap-3">
                                    <button className="text-yellow-600 flex flex-col gap-1 items-center justify-center pt-2">
                                        <FiEdit size={20} />
                                        <p className="text-blue-500">Edit</p>
                                    </button>
                                </td>
                            )}

                            {headers.map((header, headerIndex) => (
                                <td key={headerIndex} className="py-3 px-6">
                                    {item[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
