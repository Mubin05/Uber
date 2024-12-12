import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {



    const location=[
        "24B, Near Kapoor's cafe, Sheryians Coding School,Bhopal",
        "18C, Near Singhania's cafe, Sheryians Coding School,Bhopal",
        "22B, Near Malhotra's cafe, Sheryians Coding School,Bhopal",
        "10D, Near 's cafe, Sheryians Coding School,Bhopal",
    ]
  return (
    <div>
        {
            location.map(function(elem,idx){
                return(
                    <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setpanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 rounded-xl border-white active:border-black  items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-6 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill text-xl'></i></h2>
                    <h4 className='text-lg'>{elem}</h4>
                </div>
                )
            }

            )
        }
       
        
        
    </div>
  ) 
}

export default LocationSearchPanel