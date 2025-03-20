import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router'

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='min-w-auto max-w-80% h-16 rounded-2xl shadow-xl my-4 flex flex-row justify-between '>

        {/* logo and name */}

        <div className='flex flex-row cursor-pointer' id='logo and name' onClick={() => navigate('/')}>
            <img src={assets.qc}  className='w-12 h-12 rounded-xl my-auto mx-4 cursor-pointer' alt=''/>
            <h1 className='font-bold text-blue-950 text-2xl ml-0.5 my-auto sm:block hidden'> QuickCare</h1>
        </div>

        {/* nav buttons */}

        <div className='flex flex-row my-auto max-w-auto mr-6 font-semibold' id='navigation'> 
            <NavLink to={'/'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1'>Home</button> </NavLink>
            <NavLink to={'/doctors'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1'>All Doctors</button> </NavLink>
            <NavLink to={'/about'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1'>About us</button> </NavLink>
            <NavLink to={'/contact'}> <button className='border-none shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1'>Contact</button> </NavLink>
            <NavLink to={''}> <span className='border-gray-500 border-1 shadow-none mx-2 rounded-2xl transition delay-75 hover:bg-gray-100 cursor-pointer px-2 py-1 text-sm font-light no-underline lg:block hidden'>Admin login</span> </NavLink>
        </div>

        <button className='bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-sm w-[10rem] h-10 rounded-full my-auto text-white mr-6 lg:block hidden' id='create ac button' onClick={() => navigate('/login')}>Create Account</button>
    </div>
  )
}
