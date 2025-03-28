import React from 'react'
import { assets } from '../assets/assets'

export const Header = () => {
  return (
      <div className='bg-indigo-500 rounded-md mx-auto px-16 flex justify-evenly mt-6'>
        
        {/* left side */}

        <div className='text-white content-center'>
          <p className='text-4xl font-extrabold'>Book Appointment </p>
          <br />
          <p className='text-4xl font-extrabold'>With Trusted Doctors</p>

          <div className='flex my-4 '>
            <img src={assets.group_profiles} className='h-12 w-28 mr-6' alt="" />
            <p className='felx flex-wrap'> 
              Simply browse through our extensive list of trusted doctors, 
              schedule your appointment hassle-free
            </p>
          </div>

          <button className='my-0.5 p-3 bg-white rounded-full text-black px-6 cursor-pointer text-sm hover:scale-120 transition-transform duration-300'> Book an appointment</button>
        </div>

        {/* right side */}

        <div className='mt-16'>
          <img src={assets.threedocs} alt="" className='w-5xl min-w-auto'/>
        </div>
      </div>
  )
}
