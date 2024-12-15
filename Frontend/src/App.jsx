import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'

import UserContex, { UserDataContext } from './context/UserContex'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import Userlogout from './pages/Userlogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
 
  return (
    <div className=''>
      <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/riding' element={<Riding />} />
          <Route path='/captain-riding' element={<CaptainRiding />} />
          <Route path='/signup' element={<UserSignup />} />
          <Route path='/captain-login' element={<CaptainLogin />} />
          <Route path='/captain-signup' element={<CaptainSignup />} />
          <Route path='/home' element={
            <UserProtectedWrapper>
              <Home/>
            </UserProtectedWrapper>
          } />
          <Route path='/users/logout' element={
            <UserProtectedWrapper>
              <Userlogout/>
            </UserProtectedWrapper>
          } />
          <Route path='/captain-home' element={
            <CaptainProtectWrapper>
              <CaptainHome/>
            </CaptainProtectWrapper>
          } />
      </Routes>
      </div>
  )
}

export default App