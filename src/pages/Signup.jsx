import React, { useState } from 'react';
import { Link } from 'react-router';

export const Signup = () => {
    const [userType, setUserType] = useState('user');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        gender: '',
        dob: '',
        speciality: '',
    });

    const specialities = ['Pediatrician', 'Gynaecologist', 'Dermatologist', 'General Physician', 'Neurologist', 'Gastroenterologist'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="min-h-[80vh] flex items-center">
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 text-zinc-600 rounded-xl shadow-lg">
                {/* Tab Switch */}
                <div className="flex w-full">
                    <button 
                        className={`flex-1 py-2 ${userType === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`} 
                        onClick={() => setUserType('user')}
                        type="button"
                    >User</button>
                    <button 
                        className={`flex-1 py-2 ${userType === 'doctor' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`} 
                        onClick={() => setUserType('doctor')}
                        type="button"
                    >Doctor</button>
                </div>
                
                <p className='text-2xl font-semibold '>Create {userType === 'user' ? 'User' : 'Doctor'} Account</p>

                {/* Common Fields */}
                <div className='w-full'>
                    <p>Full Name</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="text" name="fullName" onChange={handleChange} value={formData.fullName} required />
                </div>
                <div className='w-full'>
                    <p>Email</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="email" name="email" onChange={handleChange} value={formData.email} required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="password" name="password" onChange={handleChange} value={formData.password} required />
                </div>
                <div className='w-full flex'>
                    <p className='gap-4 mt-2'>Gender</p>
                    <div className="flex gap-4 mt-2 ml-3">
                        <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
                    </div>
                </div>
                <div className='w-full'>
                    <p>Date of Birth</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="date" name="dob" onChange={handleChange} value={formData.dob} required />
                </div>

                {/* Doctor-Specific Fields */}
                {userType === 'doctor' && (
                    <div className='w-full'>
                        <p>Speciality</p>
                        <select className='border border-zinc-300 rounded w-full p-2 mt-2' name="speciality" onChange={handleChange} value={formData.speciality} required>
                            <option value="">Select Speciality</option>
                            {specialities.map((spec) => (
                                <option key={spec} value={spec}>{spec}</option>
                            ))}
                        </select>
                    </div>
                )}

                <button className='bg-indigo-600 text-white w-full py-2 rounded-md text-base cursor-pointer mt-2'>Create Account</button>
                <p>Already have an account? <Link to={'/login'} className='text-indigo-600 underline cursor-pointer'>Login here</Link> </p>
            </div>
        </form>
    );
};
