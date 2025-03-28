import React from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react'
import { useState } from 'react'
// import { Appcontext } from '../context/Appcontext'

export const Doctors = () => {

  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  // const { doctors } = useContext(Appcontext);

  return (
    <div>

      <p>Browse through the doctors specialist.</p>

      <div>

        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>

        {/* <div>
          {
            filterDoc.map()
          }
        </div> */}

      </div>

    </div>

  )
}
