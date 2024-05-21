import React from "react";
import { FiEdit } from "react-icons/fi";

const Card = ({ data }) => {
    return (
        <div className="bg-blue-200 w-full h-20 rounded-xl flex gap-2 items-center justify-center font-semibold py-3 px-6">
           <FiEdit /><p>Parameter {data}</p> 
        </div>
    );
};

export default Card;
