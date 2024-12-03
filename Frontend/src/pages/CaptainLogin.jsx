import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const CaptainLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [CaptainData,setCaptainData] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      setCaptainData({
        email:email,
        password:password
      })
      console.log(CaptainData)
      setEmail('')
        setPassword('')
      
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg"  alt="" />
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
        <p className='text-center'>Join a Fleet? <Link to='/captain-signup' className='text-blue-600'>Register as Captian</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full'>Sign in as a User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin