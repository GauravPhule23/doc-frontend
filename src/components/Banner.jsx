import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router'

export const Banner = () => {

  const navigate = useNavigate()

  return (
    <div>
        <div className='flex bg-indigo-600 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

            {/* left side */}

            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>

              <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className='mt-4'>With Trusted doctors</p>
              </div>

                <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-700 px-8 py-3 rounded-full mt-6 cursor-pointer hover:scale-105 transition-all delay-10'>Create account</button>
            </div>

            {/* right side */}

            <div className='hidden md:block md:w-1/2 lg-w-[370px] relative'>
                <img src={assets.pointer} alt='' className='w-full absolute bottom-0 right-0 max-w-md'/>
            </div>

        </div>
    </div>
  )
}
