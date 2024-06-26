import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./../App";
import Spinner from "react-bootstrap/Spinner";
import Formulaire from "../pages/Formulaire";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPartcipant } from "../store/participantSlice";
import Questions from "../pages/Questions";
import { useState } from "react";
import logoSfectoria from '../assets/images/sfectoria.png'
import logoJalyss from '../assets/images/jalyssCom.png'

export default function Router() {
  const user = useSelector((state) => state.participant.participant);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("participantId");
    if (id) {
      dispatch(getPartcipant(+id));
      setIsLoading(false);
    }else {
      setIsLoading(false);
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
    {isLoading && (
          <div
            className="position-fixed h-100 w-100 bg-white justify-content-center d-flex align-items-center"
            style={{ zIndex: 6 }}
          >
            <Spinner animation="border" />
          </div>
        )}
        <div className="d-flex justify-content-between bg-white px-2">
        <img src={logoSfectoria} width={150} alt="Sfectoria" style={{objectFit:'contain'}}/>
        <img src={logoJalyss} width={100} alt="JalyssCom" style={{objectFit:'contain'}}/>
        </div>
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
