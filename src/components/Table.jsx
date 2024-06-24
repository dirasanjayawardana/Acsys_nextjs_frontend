"use client";
import { useStateContext } from "@/contexts/ContexProvider";
import { IsOperator, IsSaOperator, IsSaSupervisor } from "@/validation/validateGroupAkses";
import { useRouter } from "next/navigation";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Table = ({ headers, data, action, link }) => {
    const router = useRouter();
    const { userAplikasi } = useStateContext();

    const handleEdit = (id) => {
        router.push(`${link}/edit/${id}`);
    };

    return (
        <div className="overflow-auto mx-auto w-full">
            <table className="text-center border-b cursor-pointer w-full">
                <thead>
                    <tr className="border-b-2 bg-blue-300 text-sm">
                        {(IsOperator() || IsSaOperator() || IsSaSupervisor()) && action && <th className="py-2 px-4 w-32">Action</th>}

                        {headers.map((item, index) => (
                            <th key={index} className="py-1 px-6 capitalize">
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
                            {(IsOperator() || IsSaOperator() || IsSaSupervisor()) && action && (
                                <td className="py-1 px-6 w-32 flex items-center justify-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleEdit(
                                                item[Object.keys(item)[0]]
                                            )
                                        }
                                        className="text-yellow-600 flex flex-col gap-1 items-center justify-center pt-2"
                                    >
                                        <FiEdit size={20} />
                                        <p className="text-blue-500">Edit</p>
                                    </button>
                                </td>
                            )}

                            {headers.map((header, headerIndex) => (
                                <td key={headerIndex} className="py-1 px-6">
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
