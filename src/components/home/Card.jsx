import Link from "next/link";
import React from "react";
import { FiEdit } from "react-icons/fi";

const Card = ({ data, link }) => {
    return (
        <Link href={link}>
            <div 
            className="bg-blue-200 w-full h-40 rounded-xl flex gap-2 items-center justify-center font-semibold py-3 px-6 cursor-pointer">
                <FiEdit />
                <p>Parameter {data}</p>
            </div>
        </Link>
    );
};

export default Card;
