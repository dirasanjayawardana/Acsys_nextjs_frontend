import React from 'react'
import { FiSearch } from 'react-icons/fi'

const FormSearch = () => {
  return (
    <div className='flex justify-end'>
        <form className="flex items-center border border-gray-400 rounded-xl">
        <input
          type="text"
          placeholder="Log"
          className="text-end 
          outline-none rounded-l-xl py-1 px-3 bg-transparent"
        />
      <button className="bg-blue-500 p-2 h-full rounded-r-xl ">
        <FiSearch size={20} color="white" />
      </button>
      </form>
    </div>
  )
}

export default FormSearch