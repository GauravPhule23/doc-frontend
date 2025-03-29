import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';

export const Login = () => {
  const [userType, setUserType] = useState('User');

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 text-zinc-600 rounded-xl shadow-lg">
        
        <div className="flex w-full mb-4">
          <button 
            className={`flex-1 py-2 ${userType === 'User' ? 'bg-indigo-600 text-white' : 'bg-gray-200'} rounded-l-md`} 
            onClick={() => setUserType('User')}
            type="button"
          >
            User Login
          </button>
          <button 
            className={`flex-1 py-2 ${userType === 'Doctor' ? 'bg-indigo-600 text-white' : 'bg-gray-200'} rounded-r-md`} 
            onClick={() => setUserType('Doctor')}
            type="button"
          >
            Doctor Login
          </button>
        </div>

        <p className='text-2xl font-semibold'>Login as {userType}</p>
        <p>Please log in to continue</p>

        <div className='w-full'>
          <p className='font-semibold'>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-2'
            type="email"
            required
          />
        </div>

        <div className='w-full'>
          <p className='font-semibold'>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-2'
            type="password"
            required
          />
        </div>

        <button className='bg-indigo-600 text-white w-full py-2 rounded-md text-base cursor-pointer mt-2'>Login</button>

        <p>Don't have an account? <Link to={'/signup'} className='text-indigo-600 underline cursor-pointer'>Sign up here</Link></p>
      </div>
    </form>
  );
};
