import React from 'react';
import add from '../assets/add.svg';

function Add({handleAdd}) {
  return (
    <div className='fixed top-36 right-80 bg-gray-50/80 shadow p-4 md:p-2 ml-2 rounded-md flex md:flex-col gap-4 justify-center items-center w-10'>
        <div 
        onClick={handleAdd}
        className='md:border-b md:border-r-0 border-r pr-4 md:px-0 py-2 border-gray-400 cursor-pointer hover:text-blue-500'>
            <img src={add} width={25} height={25}/>
        </div>
    </div>
  )
}

export default Add