import React from 'react'
import del from '../assets/delete.svg';

function Delete({onClick}) {
  return (
    <div className=' bg-gray-50/80 shadow p-4 mb-2 md:p-2 ml-2 rounded-md flex md:flex-col gap-4 justify-center items-center w-10'>
        <div 
        onClick={onClick}
        className='md:border-b md:border-r-0 border-r pr-4 md:px-0 py-2 border-gray-400 cursor-pointer hover:text-blue-500'>
            <img src={del} width={25} height={25}/>
        </div>
    </div>
)
}

export default Delete