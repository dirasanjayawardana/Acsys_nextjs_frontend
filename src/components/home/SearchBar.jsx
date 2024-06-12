import React from "react";
import { FiSearch, FiTable } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";

const SearchBar = () => {
    return (
        <div className="bg-gray-200 py-3 px-4 rounded-xl flex justify-between items-center text-blue-500">
            <BsGrid size={24} />
            <form className="flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search Parameter"
                    className="bg-white text-end px-3 py-1 rounded-xl border"
                />
                <button>
                    <FiSearch size={20} />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
