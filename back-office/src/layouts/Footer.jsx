  import React, { Component } from "react";


export default function Footer() {
  return (
   
      <footer
        className="footer p-2 d-flex justify-content-center align-items-center  position-fixed bottom-0 w-100"
        
      > 
        <img
          src={require(".././assets/img/sfectoria.png")}
          alt="logo Sfectoria"
          loading="lazy"
          width={200}
        />
      </footer>
    
  );
}
