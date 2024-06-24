"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

const TableUser = ({ headers, data }) => {

    return (
        <div className="overflow-auto mx-auto">
            <table className="text-center border-b w-full">
                <thead>
                    <tr className="border-b-2 bg-blue-300 text-sm">
                        {headers.map((item, index) => (
                            <th key={index} className="py-2 px-6 capitalize">
                                {item}
                            </th>
                        ))}
                        {/* <th className="border-b-2 bg-blue-300 text-sm">
                            Action
                        </th> */}
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
                            {headers.map((header, headerIndex) => (
                                <td key={headerIndex} className="py-2 px-6">
                                    {item[header]}
                                </td>
                            ))}

                            {/* <td className="py-1 px-6 capitalize flex justify-center">
                                <button
                                    type="button"
                                    className={`flex flex-col gap-1 items-center justify-center pt-2 text-green-600`}
                                >
                                    <FiEdit size={20}/>
                                    <p className="">Edit</p>
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableUser;
