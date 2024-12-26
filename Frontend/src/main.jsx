import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContex from './context/UserContex.jsx'
import CaptainContext from './context/CaptainContext.jsx'
import SocketProvider from './context/SocketContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
      <UserContex>
      <SocketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketProvider>
      </UserContex>
    </CaptainContext>
  </StrictMode>,
)
