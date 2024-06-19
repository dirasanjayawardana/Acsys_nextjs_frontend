import { IsOperator, IsSaOperator, IsSaSupervisor } from "@/validation/validateGroupAkses";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

const ButtonAddParameter = ({ link }) => {
    return (
        <div>
            { (IsOperator() || IsSaOperator() || IsSaSupervisor()) &&
                <Link href={link}>
                    <button className="flex items-center gap-2 bg-blue-500 py-2 px-3 rounded-xl text-white">
                        <FiPlus size={20} /> <p>Add</p>
                    </button>
                </Link>
            }
        </div>
    );
};

export default ButtonAddParameter;
