import React, { useState, createContext, useEffect } from "react";
import App from "../apps/App";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { getMe } from "../store/auth";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Auth from "../apps/auth";
import Login from "../pages/Login";
import Questions from "../domains/questions/Questions";
import QuestionsList from "../domains/questions/views/QuestionsList";
import QuestionsDetails from "../domains/questions/views/QuestionsDetails";
import Admins from "../domains/admins/Admins";
import AdminsList from "../domains/admins/views/AdminsList";
import AdminDetails from "../domains/admins/views/AdminDetails";
import Rewards from "../domains/rewards/Rewards";
import RewardList from "../domains/rewards/views/RewardList";
import RewardDetails from "../domains/rewards/views/RewardDetails";
import Participants from "../domains/participants/Participants";
import ParticipantsList from "../domains/participants/views/ParticipantsList";
import ParticipantDetails from "../domains/participants/views/ParticipantDetails";
export const UserContext = createContext();



export default function Router() {
  const user = useSelector((store) => store.auth.me);
  console.log(user,"this is the user")
  // const user = false;
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"))
    if (token)
      dispatch(getMe(token)).then((res) => {
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

                <Route path="questions" element={<Questions />}>
                  <Route index element={<QuestionsList />} />
                  <Route path="question/:id" element={<QuestionsDetails />} />
                </Route>

                <Route path="admins" element={<Admins />}>
                  <Route index element={<AdminsList />} />
                  <Route path="admin/:id" element={<AdminDetails />} />
                </Route>
                <Route path="rewards" element={<Rewards />}>
                  <Route index element={<RewardList />} />
                  <Route path="reward/:id" element={<RewardDetails />} />
                </Route>
                <Route path="participants" element={<Participants />}>
                  <Route index element={<ParticipantsList />} />
                  <Route path="participant/:id" element={<ParticipantDetails />} />
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
