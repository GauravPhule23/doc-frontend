import React from 'react'
import { assets } from '../assets/assets'
export const About = () => {
  return (
    <div>
        <div className="py-12 px-6 lg:px-24 mt-12 flex flex-col lg:flex-row items-center justify-between">

          <div className="lg:w-1/2 mb-8 lg:mb-0 mr-18">
            <img
              src={assets.aboutus_doc}
              alt="Team of doctors"
              className="rounded-xl shadow-xl w-[2000px] "
            />
          </div>
          
          {/* Text Section */}
          
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-indigo-900 mb-8"> <span className='text-zinc-600 font-medium'>About </span> Us</h2>
            <p className="text-zinc-800 mb-6">
              Welcome to <span className="font-semibold">Quickcare</span> — your
              modern solution to healthcare appointment management. Our goal is to
              simplify the traditional process of booking doctor appointments through
              a smart, user-friendly platform that connects patients with verified
              doctors in just a few clicks.
            </p>
            <p className="text-zinc-800 mb-6">
              At Quickcare, we blend healthcare and technology to build a system that
              prioritizes efficiency, trust, and ease of access. Whether you're a
              patient looking for the right specialist or a doctor managing your
              availability, our platform is designed to meet your needs with clarity
              and simplicity.
            </p>

            <h3 className="text-2xl font-semibold text-indigo-950 mb-3">
              Why Choose Quickcare?
            </h3>

            <ul className="list-none space-y-3">

              <li className="flex items-start">
                <span className="text-indigo-700 text-xl mr-2">✔</span>
                <div>
                  <span className="font-semibold">Easy Specialist Booking:</span>{" "}
                  Quickly find and connect with top doctors across specialties.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-indigo-700 text-xl mr-2">✔</span>
                <div>
                  <span className="font-semibold">Smart Scheduling:</span> Choose
                  dates and slots that suit you best.
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-indigo-700 text-xl mr-2">✔</span>
                <div>
                  <span className="font-semibold">Secure & Reliable:</span> Powered
                  by modern tech to ensure your data is safe and your experience is
                  seamless.
                </div>
              </li>

            </ul>

          </div>
        </div>

    </div>
  )
}
