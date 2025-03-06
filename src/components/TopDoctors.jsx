import React from 'react'
import { doctors } from '../assets/assets'
import { Link } from 'react-router'

export const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center py-16 gap-4 text-gray-800'>

        {/* Info text */}

        <p className='text-3xl font-semibold mb-4'>Top Doctors to Book</p>
        <div className='text-sm font-sans font-medium text-center'>
            <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>

        {/* Doctor's cards */}

        <div className='flex flex-wrap justify-center mt-10 w-auto h-auto gap-4'>
            {doctors.slice(0, 10).map((val, i) => (
                <Link to={`/appointments/${val._id}`} className='flex flex-col items-center px-1.5 hover:translate-y-[-10px] transition-all duration-500 rounded-md gap-4' key={i}>
                    <img src={val.image} alt="" className='w-16 sm:w-52 mb-2 bg-indigo-100'/>
                    <p className='text-xl font-medium'>{val.name}</p>
                    <p className='font-medium'>{val.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}
