import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { me } from "../store/auth";
import Main from "../domains/Main";
import Dashboard from "../domains/Dashboard";

function Router() {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth?.me);

  const [loading, setLoading] = useState(true);

  // useEffect(
  //   () => {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     if (token) {
  //       const Authorization = token.Authorization;
  //       dispatch(me(Authorization)).then(res => setLoading(false));
  //     } else {
  //       setLoading(false);
  //     }
  //   },
  //   [dispatch]
  // );
  return (
    <div>
      {loading &&
        <div className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 bg-white">
          Loading
        </div>}
      <BrowserRouter>
        <Routes>
          {/* {user && */}
            <Route path="/" element={<Main />}>
              <Route index element={<Dashboard />} />
            </Route>
            {/* } */}
          {/* {!user &&
            <Route path="/" element={<AuthAdmin />}>
              <Route index element={<LoginAdmin />} />
            </Route>}
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
