import React from 'react'
import Header from "../widgets/Header";
import Cards from '../widgets/Cards';
function FacultyPage() {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <div className=' bg-slate-900 text-white p-4 '>
                <div className='grid grid-cols-2'>
                    <div className='place-items-start '><h5>change password</h5></div>
                    <div className='place-items-end '><h5>Logout</h5></div>
                </div>
            </div>
        </div>
        <div className='w-full '>
            <div className=' mt-5 mx-5 place-items-center '>
                <h1 className='text-gray-900 text-2xl md:text-3xl font-semibold'>Duty Leave Applications Pending</h1>
            </div>
        </div>
        <div className='m-4 pt-4'>
                <Cards/>
        </div>
    </div>
  )
}

export default FacultyPage