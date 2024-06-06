import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import { FiLoader } from 'react-icons/fi'

const loading = () => {
    return (
        <div className='min-h-screen min-w-full bg-gray-300 text-black flex gap-3 items-center justify-center'>
            <p>Please Wait</p>
            {/* <FiLoader size={22} className='animate-spin-slow' /> */}
            <span className="loading loading-spinner"></span>
        </div>
    )
}

export default loading