import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./../App";

import Formulaire from "../pages/Formulaire";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPartcipant } from "../store/participantSlice";
import Questions from "../pages/Questions";

export default function Router() {
  const user = useSelector((state) => state.participant.participant);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem("participantId");
    if (id) {
      dispatch(getPartcipant(+id));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {user ? (
            <Route index element={<Questions />} />
          ) : (
            <Route index element={<Formulaire />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
