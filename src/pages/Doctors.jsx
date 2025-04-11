import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { doctors as staticDoctors } from '../assets/assets';

export const Doctors = () => {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('https://quickcare-backend.vercel.app/api/doctors');
        if (res.data && res.data.data && res.data.data.length > 0) {
          setDoctorsList(res.data.data);
        } else {
          setDoctorsList(staticDoctors);
        }
      } catch (error) {
        console.error('Failed to fetch doctors from backend, using static data.', error);
        setDoctorsList(staticDoctors);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <div className='flex flex-wrap justify-center mt-10 w-auto h-auto gap-4'>
        {doctorsList.map((val, i) => (
          <Link
            to={`/appointments/${val._id}`}
            className='flex flex-col mx-1.5 hover:translate-y-[-10px] transition-all duration-500 rounded-xl border-1 border-indigo-400'
            key={i}
          >
            <img src={val.image} alt="" className='w-16 sm:w-52 bg-indigo-100 rounded-t-lg' />
            <div className='bg-gray-100 rounded-b-xl pl-4 py-3'>
              <p className='text-lg font-medium'>{val.name}</p>
              <p className='font-medium'>{val.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
