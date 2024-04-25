import React, { useState, createContext, useEffect } from "react";

import { Outlet } from "react-router-dom";



import { useDispatch, useSelector } from "react-redux";
import SideBar from "../layouts/SideBar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function Main() {
//   const me = useSelector((state) => state.auth.me);
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <div style={{ paddingLeft: isOpen ? 250 : 50 }}>

      <footer
        className="footer p-2 d-flex justify-content-center align-items-center  position-fixed bottom-0 w-100 z-3 shadow bg-light"
        
      > 
        <img
          src={require(".././assets/img/sfectoria.png")}
          alt="logo Sfectoria"
          loading="lazy"
          width={200}
        />
      </footer>

      </div>
      <Header toggle={toggle} isOpen={isOpen} />

      <div className="pages" style={{ paddingLeft: isOpen ? 250 : 50,height:"90vh" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;