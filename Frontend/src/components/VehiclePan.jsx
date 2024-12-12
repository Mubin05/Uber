import React from 'react'

const VehiclePan = (props) => {
  return (
    <div>
        <h5 onClick={() => {
                props.setVehiclePanel(false)
            }} className='p-3 w-[93%] text-center absolute top-0 '><i className='text-3xl text-gray-500 ri-arrow-down-wide-line'></i></h5>
            <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
            <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex w-full p-3 mb-2  border-2 active:border-black rounded-xl  items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm text-gray-600'>2 mins away</h5>
                    <p className='font-normal text-sm'>Affordabe, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>Rs.196.20</h2>
            </div>
            <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex w-full p-3 mb-2  border-2 active:border-black rounded-xl  items-center justify-between'>
                <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Uber Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
                    <h5 className='font-medium text-sm text-gray-600'>3 mins away</h5>
                    <p className='font-normal text-sm'>Affordabe motercycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>Rs.65</h2>
            </div>
            <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex w-full p-3 mb-2  border-2 active:border-black rounded-xl  items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Uber Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
                    <h5 className='font-medium text-sm text-gray-600'>3 mins away</h5>
                    <p className='font-normal text-sm'>Affordabe motercycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>Rs.118.65</h2>
            </div>
    </div>
  )
}

export default VehiclePan