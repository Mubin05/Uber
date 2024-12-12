import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchpanel from "../components/LocationSearchPanel";
import VehiclePan from "../components/VehiclePan";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelcloseRef = useRef(null);
  const [VehiclePanel, setVehiclePanel] = useState(false);
  const [ConfirmRidePanel,setConfirmRidePanel] = useState(false)
  const [vehicleFound,setvehicleFOund] = useState(false)
 const [waitingforDriver, setwaitingforDriver] = useState(false)

  const ConfirmRidePanelRef=useRef(null)
  const vehiclePanelRef = useRef(null);
  const waitingforDriverRef = useRef(null);
  const VehicleFoundRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 20,
        });
        gsap.to(panelcloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: 0,
          padding: 0,
        });
        gsap.to(panelcloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (VehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [VehiclePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(VehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (ConfirmRidePanel) {
        gsap.to(ConfirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePanel]
  );
  useGSAP(
    function () {
      if (waitingforDriver) {
        gsap.to(waitingforDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingforDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingforDriver]
  );




  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
        alt=""
      />
      <div
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="h-screen w-screen"
      >
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelcloseRef}
            onClick={() => {
              setpanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setpickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setdestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white ">
          <LocationSearchpanel
            setpanelOpen={setpanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="w-full fixed z-10 bottom-0 translate-y-full px-3 py-10 pt-14 bg-white"
      >
        <VehiclePan setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div
        ref={ConfirmRidePanelRef}
        className="w-full fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-14 bg-white"
      >
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setvehicleFOund={setvehicleFOund} />
      </div>
      <div
      ref={VehicleFoundRef}
        className="w-full fixed z-10 bottom-0 translate-y-full px-3 py-6 pt-14 bg-white"
      >
        <LookingForDriver setvehicleFOund={setvehicleFOund}/>
      </div>
      <div
        ref={waitingforDriverRef}
        className="w-full fixed z-10 bottom-0  px-3 py-6 pt-14 bg-white"
      >
        <WaitingForDriver setwaitingforDriver={setwaitingforDriver}/>
      </div>
    </div>
  );
};

export default Home;