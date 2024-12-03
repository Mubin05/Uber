import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [UserData,setUserData] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      setUserData({
        email:email,
        password:password
      })
      console.log(UserData)
      setEmail('')
        setPassword('')
      
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  alt="" />
        <form action="" onSubmit={(e)=>{
          handleSubmit(e)
        }}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" required placeholder='emal@example.com' />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }} className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" required placeholder='password' />
            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full'>Login</button>
            
        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full'>Sign in as a Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin