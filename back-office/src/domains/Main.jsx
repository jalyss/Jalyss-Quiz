import React, { useState, createContext, useEffect } from "react";

import { Outlet } from "react-router-dom";



import { useDispatch, useSelector } from "react-redux";

function Main() {
  const me = useSelector((state) => state.auth.me);
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Header toggle={toggle} isOpen={isOpen} />

      <div className="pages" style={{ paddingLeft: isOpen ? 250 : 50 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
