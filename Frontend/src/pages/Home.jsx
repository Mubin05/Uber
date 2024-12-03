import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-cover  bg-[url(https://images.unsplash.com/photo-1651037476196-357f82c04f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  w-full flex justify-between flex-col '>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  alt="" />
        <div className='bg-white pb-7 px-4 py-4'> 
            <h2 className='text-3xl font-bold'>Get Stared with Uber</h2>
            <Link to='login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
    </div>
  )
}

export default Home