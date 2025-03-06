import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Doctors } from './pages/Doctors'
import { Login } from './pages/Login'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Myprofile } from './pages/Myprofile'
import { Myappointments } from './pages/Myappointments'
import { Appointments } from './pages/Appointments'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      {/* components for all the pages */}

      <Navbar />

      {/* website route paths */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<Myappointments />} />
        <Route path='/appointments/:docId' element={<Appointments />} />
      </Routes>
    </div>
  )
}

export default App