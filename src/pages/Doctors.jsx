import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router';
import { useContext } from 'react'
import { useState } from 'react'
import { doctors } from '../assets/assets'
// import { Appcontext } from '../context/Appcontext'

export const Doctors = () => {

  // const { doctors } = useContext(Appcontext);

  return (
    <div>

      <div className='flex flex-wrap justify-center mt-10 w-auto h-auto gap-4'>

        {doctors.map((val, i) => (
            <Link to={`/appointments/${val._id}`} className='flex flex-col mx-1.5 hover:translate-y-[-10px] transition-all duration-500 rounded-xl border-1 border-indigo-400' key={i}>
                <img src={val.image} alt="" className='w-16 sm:w-52 bg-indigo-100 rounded-t-lg'/>
                <div className='bg-gray-100 rounded-b-xl pl-4 py-3'> 
                    <p className='text-lg font-medium'>{val.name}</p>
                    <p className='font-medium'>{val.speciality}</p>
                </div>
            </Link>
        ))}

      </div>

    </div>

  )
}
