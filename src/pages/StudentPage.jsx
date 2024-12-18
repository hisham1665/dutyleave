import React from 'react'
import Header from "../widgets/Header";
import Cards from '../widgets/Cards';
import {  useNavigate } from 'react-router-dom';
function StudentPage() {
    const navigate = useNavigate();
    const handleNewApplication = () => {
        navigate('/dutyLeaveApplication');
    }
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <div className='grid grid-cols-2 bg-slate-900 text-white p-4 '>
                <div className='place-items-start mt-3'>
                    <div><h5>change password</h5></div>
                    <div><h5>Logout</h5></div>
                </div>
                <div className='flex justify-end '>
                    <button onClick={handleNewApplication} className='sm:mt-7 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm min-w-fit me-10 p-2.5'> 
                        <h1 className='lg:text-lg text-sm font-semibold sm:text-sm'> New Application </h1>
                    </button>   
                </div>
            </div>
        </div>
        <div className='w-full '>
            <div className=' mt-5 mx-5 place-items-center '>
                <h1 className='text-gray-900 text-2xl md:text-3xl font-semibold'>Your Duty Leave Application Status</h1>
            </div>
        </div>
        <div className='m-4 pt-4'>
                <Cards/>
        </div>
    </div>
  )
}

export default StudentPage