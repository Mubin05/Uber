import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const [ConfirmridePopupPanel, setConfirmridePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const ConfirmridePopupPanelRef = useRef(null)
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  useGSAP(
    function () {
      if (ConfirmridePopupPanel) {
        gsap.to(ConfirmridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmridePopupPanel]
  );
  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen '>
        <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
          <i className='tetx-lg font-medium ri-logout-box-r-line'></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails/>
      </div>
      <div
        ref={ridePopupPanelRef}
        className="w-full fixed z-10 bottom-0 translate-y-full px-3 py-10 pt-14 bg-white"
      >
        <RidePopup setridePopupPanel={setridePopupPanel} setConfirmridePopupPanel={setConfirmridePopupPanel} />
      </div>
      <div
        ref={ConfirmridePopupPanelRef}
        className="w-full fixed z-10 h-screen bottom-0 translate-y-full px-3 py-10 pt-14 bg-white"
      >
        <ConfirmRidePopup setConfirmridePopupPanel={setConfirmridePopupPanel}  setridePopupPanel={setridePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome