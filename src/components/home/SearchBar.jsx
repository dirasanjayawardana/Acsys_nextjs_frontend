import React from "react";
import { FiSearch, FiTable } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";

const SearchBar = () => {
    return (
        <div className="bg-blue-200 py-3 px-4 rounded-xl flex justify-between items-center">
            <BsGrid size={24} />
            <form className="flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search App"
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
