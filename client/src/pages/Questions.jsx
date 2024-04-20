import React, { useEffect, useState } from "react";
import Rmodal from "../Modals/Rmodal";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, participantQuestion } from "../store/levels";
import WModal from "../Modals/Wmodal";
import WheelWinner from "./Wheel";
import Lottie from "react-lottie";
import winner from "../lotties/Animation - 1713232910020.json";

import Wheelmodal from "../Modals/WheelModal";
export default function Questions() {
  const [clicked, setClicked] = useState(false);
  const [niveau, setNiveau] = useState(0);
  const [progress, setProgress] = useState("00%");
  const [openR, setOpenR] = React.useState(false);
  const handleCloseR = () => setOpenR(false);
  const [openWM, setOpenWM] = React.useState(false);
  const handleCloseWM = () => setOpenWM(false);
  const [openW, setOpenW] = React.useState(false);
  const handleCloseW = () => setOpenW(false);
  const [prize, setPrize] = useState({
    slogan: "",
    reward: "",
  });
  const questions = useSelector((state) => state.level?.levels);
  console.log(questions, "those are questions");
  const defaultOptionsWinner = {
    loop: true,
    autoplay: true,
    animationData: winner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions(niveau));
  }, [questions?.length, niveau, dispatch]);

  return (
    <div className="contain  ">
      <h1 className="title">
        {progress !== "99%"
          ? questions?.Level?.type
          : `العب و اربح مع جليسكم 🎉
`}
      </h1>
      <div className="todo-app col-10">
        <div className="w-100">
          <div className="progress">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: progress, background: "#E6C440" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        {progress !== "99%" ? (
          <div style={{ padding: 30 ,backgroundColor:' #e2bae6' }} className="bg-light">
            <div>
              <p
                style={{
                  fontSize: 30,
                  fontWeight: 70,
                  whiteSpace: "no-wrap",
                  direction: "rtl",
                  color: "#000",
                }}
              >
                {questions?.question}
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <img
                src={questions?.imageUrl}
                alt=""
                width="100%"
                style={{ maxHeight: 350, objectFit: "cover" }}
                className="rounded img-fluid"
              />
            </div>
            <div>
              <div className="d-flex flex-wrap gap-2 justify-content-between mt-4 ">
                {questions?.answers?.map((elem, i) => (
                  <p
                    className={`background col-5 text-center p-1 rounded text-dark fs-5 ${
                      clicked &&
                      (elem.isTrue
                        ? "backgroundWinner text-white"
                        : "backgroundLoser text-white")
                    }`}
                    key={i}
                    onClick={() => {
                      setClicked(true);
                
                      dispatch(
                        participantQuestion({
                          answerId: elem.id,
                          questionId: questions.id,
                          participantId: JSON.parse(
                            localStorage.getItem("participantId")
                          ),
                        })
                      );
                      elem.isTrue ? setOpenR(true) : setOpenW(true);
                    }}
                  >
                    {elem.answer}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: 30,
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WheelWinner
              setOpen={setOpenWM}
              setPrize={setPrize}
              
            />
            {openWM && prize?.reward && (
              <Lottie
                options={defaultOptionsWinner}
                height={200}
                width={200}
                style={{
                  position: "fixed",
                  top: "2%",
                  zIndex: 5,
                }}
              />
            )}
          </div>
        )}
        <Rmodal
          handleClose={handleCloseR}
          open={openR}
          setNiveau={setNiveau}
          setProgress={setProgress}
          niveau={niveau}
          progress={progress}
          setClicked={setClicked}
          clicked={clicked}
          setOpen={setOpenR}
        />
        <WModal handleClose={handleCloseW} open={openW} />
        <Wheelmodal handleClose={handleCloseWM} open={openWM} prize={prize} />
      </div>
    </div>
  );
}
