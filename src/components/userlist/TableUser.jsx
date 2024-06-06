"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TableUser = ({headers, data}) => {
    
    // const data = Array.from({ length: 25 }, (_, index) => index + 1);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [perPage, setPerPage] = useState(10);

    // const paginateData = () => {
    //     const lastIndex = currentPage * perPage;
    //     const firstIndex = lastIndex - perPage;
    //     return data.slice(firstIndex, lastIndex);
    // };
    // const [dataUser, setDatauser] = useState("")

    // useEffect(() => {
    //     getDataUser();

    // }, [])

    // const getDataUser = async() => {
    //     setDatauser(null);
    //     try {
    //         const response = await axios.get(
    //             `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/useracsys`
    //         );
    //         console.log(response.data.data);
    //     } catch (error) {
            
    //     }
    // }

    return ( 
        <div className="overflow-auto mx-auto">
            <table className="text-center border-b cursor-pointer w-full">
                <thead>
                    <tr className="border-b-2 bg-blue-300 text-sm">
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

export default TableUser;
