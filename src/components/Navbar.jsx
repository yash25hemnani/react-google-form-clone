import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <>
    <div className='block w-full shadow'>
        <div className='flex justify-between mx-auto items-center w-full max-w-7xl px-6 h-20'>
            <Link 
            to='/'
            className="flex justify-center items-center gap-5 text-lg text-blue-500 md:text-2xl"
            >
                Google Form Clone
            </Link>
            <div className='flex justify-center items-start gap-5'>
                <Link 
                to='/formlist'
                className="bg-blue-500 uppercase text-white px-6 py-3 rounded"
                >
                    Forms
                </Link>
            </div>

        </div>
    </div>
    </>
  )
}

export default Navbar