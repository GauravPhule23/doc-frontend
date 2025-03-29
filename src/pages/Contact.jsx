import React from 'react'

export const Contact = () => {
  return (
    <div className='flex items-center '>

      <div className='flex flex-col m-auto'>

        {/* heading */}
        <div className='flex items-center text-2xl font-bold text-center my-8'> 
          <p>CONTACT US</p> 
        </div>

        <div>

          {/* info 1 */}
          <div name={'shubham'}>

            <p className='text-2xl my-4'>Frontend By</p>
            <div className='flex'>

              <img className='w-56' src="https://pbs.twimg.com/profile_images/1904974670597865472/wOfhXPZo_400x400.jpg" alt="" />

              <div className='flex flex-col justify-center ml-4'>
                <span className='text-xl' >Shubham Pawar</span>
                <div className='flex'>
                  <img className='w-8 cursor-pointer' onClick={() => window.open("https://github.com/CodingManiac27")} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                  <img className='w-8 m-3 cursor-pointer' onClick={() => window.open("https://www.linkedin.com/in/shubham-pawar-9092b72b1/")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="linkedin" />
                </div>
              </div>

            </div>

          </div>

          {/* info 2 */}
          <div name={'gaurav'}>

            <p className='text-2xl my-4'>Backend By</p>
            <div className='flex'>

              <img className='w-56' src="https://pbs.twimg.com/profile_images/1904974670597865472/wOfhXPZo_400x400.jpg" alt="" />

              <div className='flex flex-col justify-center ml-4'>
                <span className='text-xl' >Gaurav Phule</span>
                <div className='flex'>
                  <img className='w-8 cursor-pointer' onClick={() => window.open("https://github.com/GauravPhule23")} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                  <img className='w-8 m-3 cursor-pointer' onClick={() => window.open("https://www.linkedin.com/in/gaurav-phule-768394248/")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="linkedin" />
                </div>
              </div>

            </div>

          </div>
        </div>
      
      </div>

    </div>
  )
}
