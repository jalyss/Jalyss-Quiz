import React from 'react';
import Lottie from "react-lottie";
import participant from "../assets/lotties/participant.json";
import user  from "../assets/lotties/user.json";
import { buttonColor } from '../colors/buttonsColor';

function Dashboard() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: user,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    return (
      
      <div className='d-flex justify-content-center p-2 gap-4 '>
        <div className="card  align-items-center d-flex flex-column justify-content-center shadow" style={{width:"25rem",height:"16rem"}}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
         
         <div className='d-flex justify-content-center align-items-center'><Lottie 
	    options={defaultOptions}
        height={80}
        width={80}
      />
            <h5 className="card-title" style={{color:buttonColor,marginBottom:0,fontSize:"4rem"}}>4.1M</h5></div> 
            <card className="card-text fs-1 "  style={{color:"gray"}}>Total Participants</card>
          </div>
        </div>
        <div className="card  align-items-center d-flex flex-column justify-content-center shadow" style={{width:"25rem",height:"16rem"}}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
         
         <div className='d-flex justify-content-center align-items-center'><Lottie 
	    options={defaultOptions}
        height={80}
        width={80}
      />
            <h5 className="card-title" style={{color:buttonColor,marginBottom:0,fontSize:"4rem"}}>4.1M</h5></div> 
            <card className="card-text fs-1" >Total Participants</card>
          </div>
        </div>
        <div className="card  align-items-center d-flex flex-column justify-content-center shadow" style={{width:"25rem",height:"16rem"}}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
         
         <div className='d-flex justify-content-center align-items-center'><Lottie 
	    options={defaultOptions}
        height={80}
        width={80}
      />
            <h5 className="card-title" style={{color:buttonColor,marginBottom:0,fontSize:"4rem"}}>4.1M</h5></div> 
            <card className="card-text fs-1" >Total Participants</card>
          </div>
        </div>
        <div className="card  align-items-center d-flex flex-column justify-content-center shadow" style={{width:"25rem",height:"16rem"}}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
         
         <div className='d-flex justify-content-center align-items-center'><Lottie 
	    options={defaultOptions}
        height={80}
        width={80}
      />
            <h5 className="card-title" style={{color:buttonColor,marginBottom:0,fontSize:"4rem"}}>4.1M</h5></div> 
            <card className="card-text fs-1" >Total Participants</card>
          </div>
        </div>
      </div>
   
    );
}

export default Dashboard
