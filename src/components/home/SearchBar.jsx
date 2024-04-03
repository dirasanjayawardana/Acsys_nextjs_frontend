import React from "react";
import { FiSearch, FiTable } from "react-icons/fi";

const SearchBar = () => {
    return (
        <div className="bg-blue-200 py-2 px-4 rounded-xl flex justify-between items-center">
            <FiTable size={24} />
            <form className="flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search App"
                    className="bg-transparent text-end px-3 py-1 rounded-xl border border-gray-400"
                />
                <button>
                    <FiSearch size={20} />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
