"use client"
import Link from "next/link";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Table = ({ headers, data, action }) => {
  return (
    <div>
      <table className="w-full text-center border cursor-pointer">
        <thead>
          <tr className="border-b-2 bg-blue-300">
            {headers.map((item, index) => (
              <th key={index} className="py-2 px-4">
                {item}
              </th>
            ))}
            {action && <th className="py-2 px-4">Action</th>}
          </tr>
        </thead>
        <tbody className="bg-black">
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-blue-100"
              } hover:bg-gray-100`}
            >
              {headers.map((header, headerIndex) => (
                <td key={headerIndex} className="py-2 px-4">
                  <Link href={item.link}>
                    {item[header]}
                  </Link>
                </td>
              ))}

              {action && (
                <td className="py-2 px-4 flex items-center justify-center gap-3">
                  <button className="text-red-500">
                    <FiTrash2 size={20} />
                  </button>
                  <button className="text-yellow-600">
                    <FiEdit size={20} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
