

import React, { useState, createContext, useEffect } from "react";
import App from "../apps/App";

import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from "../pages/auth/Login";
import Spinner from "react-bootstrap/Spinner";
import { getMe } from "../store/auth";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/profile/Profile";
import ProfileDetails from "../pages/profile/views/ProfileDetails";
import EditProfile from "../pages/profile/views/EditProfile";
import Users from "../pages/users/Users";
import AddUser from "../pages/users/views/AddUser";
import AllUsers from "../pages/users/views/AllUsers";
import EditUser from "../pages/users/views/EditUser";
import UserDetails from "../pages/users/views/UserDetails";
import NotFound from "../pages/NotFound";
import Auth from "../apps/auth";
export default function Router() {
    const user = useSelector((store) => store.auth.me);
    const [isLoading, setIsLoading] = useState(true);
  
    const dispatch = useDispatch();
    useEffect(() => {
      let token = localStorage.getItem("token");
      if (token)
        dispatch(getMe()).then((res) => {
          setIsLoading(false);
        });
      else {
        setIsLoading(false);
      }
    }, [dispatch]);
    return (
      <>
        {isLoading && (
          <div
            className="position-fixed h-100 w-100 bg-white justify-content-center d-flex align-items-center"
            style={{ zIndex: 6 }}
          >
            <Spinner animation="border" />
          </div>
        )}
  
        <BrowserRouter>
          <Routes>
            <Route>
              {user ? (
                <Route path="/" element={<App />}>
                  <Route index element={<Dashboard />} />
                  
                  <Route path="profile" element={<Profile />}>
                    <Route index element={<ProfileDetails />} />
                    <Route path="edit" element={<EditProfile />} />
                  </Route>
                  
  
                  
  
                  <Route path="users" element={<Users />}>
                    <Route index element={<AllUsers />} />
                    <Route path="adduser" element={<AddUser />} />
                    <Route path="userdetails/:id" element={<UserDetails />} />
  
                    <Route path="edituser/:id" element={<EditUser />} />
                    
                  </Route>
                </Route>
              ) : (
                <Route path="/" element={<Auth />}>
                  <Route index element={<Login />} />
                </Route>
              )}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
