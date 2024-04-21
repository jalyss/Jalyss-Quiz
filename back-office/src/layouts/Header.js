import React from 'react';
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/img/avatar.jpeg";
import { useSelector } from 'react-redux';


function Header({ isOpen }) {
  const navigate = useNavigate();
  const me = useSelector(state => state.auth?.me)

  console.log(me,"this is me ")


  return (
    <div className="header" style={{ paddingLeft: isOpen ? 250 : 50 }}>
      <div className="d-flex flex-row-reverse justify-content-between">
        <div className="d-flex mt-2 dropdownHeader ">
          
          <div className="icon" style={{ color: "#1a408c" }}>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdownMenu2">
                <img
                  src={avatar}
                  className="rounded-circle"
                  style={{ width: "40px", marginRight: "10px" }}
                  alt="Avatar"
                />
                {me?.fullName?me?.fullName:"Si Flen"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Setting</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Header;
