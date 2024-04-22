import React from "react";
import { FiSearch } from "react-icons/fi";

const FormSearch = () => {
  return (
    <div className="flex justify-end mb-5">
      <form className="flex items-center border border-gray-400 rounded-xl">
        <input
          type="text"
          placeholder="Search Log"
          className="text-end py-1 px-3 rounded-l-xl bg-transparent outline-none plac"
        />
        <button className="bg-blue-500 p-2 h-full rounded-r-xl text-white">
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default FormSearch;