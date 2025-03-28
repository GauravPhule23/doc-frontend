import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';

export const Login = () => {

  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 text-zinc-600 rounded-xl shadow-lg">
        <p className='text-2xl font-semibold '>Login</p>
        <p> Please log in to book appointment </p>

        {
          state === "Sign Up" 
          ? <div className='w-full'>
              <p>Full Name</p>
              <input
                className='border border-zinc-300 rounded w-full p-2 mt-2'
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          : <div className='hidden'></div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-2'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-2'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className='bg-indigo-600 text-white w-full py-2 rounded-md text-base cursor-pointer mt-2'>Login</button>

        <p>Create an new account? <Link to={'/signup'} className='text-indigo-600 underline cursor-pointer' onClick={() => setState('Sign Up')}>Click here</Link> </p>
        
      </div>
    </form>
  )
}
