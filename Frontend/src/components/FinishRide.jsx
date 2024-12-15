import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div className=''>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.setfinishRidePanel(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
      <div className='flex items-center justify-between p-4 bg-yellow-400 border-2 rounded-lg  mt-4'>
        <div className='flex items-center gap-3  '>
          <img className='h-12 rounded-full object-cover w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbqkj7uqS4RFpZZfPRu50xIJY9gss2dqAOg&s" alt="" />
          <h2 className='text-xl font-medium'>Harsh Patel</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM  </h5>
      </div>
      <div className='flex gap-2 justify-between flex-col items-center'>


        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">5621/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya talab,Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">5621/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya talab,Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs.193.60</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>

        </div>

        <div className='mt-6 w-full'>

          <Link to='/captain-home' onClick={() => {
          }} className="w-full mt-5 flex justify-center bg-green-500 text-white font-semibold p-3 text-lg rounded-lg">Finish Ride</Link>
          
        </div>

      </div>
    </div>
  )
}

export default FinishRide