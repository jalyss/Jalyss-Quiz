import React, { useEffect, useState } from "react";
import { answers } from "../constants/answers";
import Rmodal from "../components/Rmodal";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/levels";
import WModal from "../components/Wmodal";
import WheelWinner from "./Wheel";
import Wheelmodal from "../components/WheelModal";
export default function Quesrions() {
  const [clicked, setClicked] = useState(false);
  const [niveau, setNiveau] = useState(0);
  const [progress,setProgress]=useState("25%")
  const [openR, setOpenR] = React.useState(false);
  const handleOpenR = () => setOpenR(true);
  const handleCloseR = () => setOpenR(false);
  const [openW, setOpenW] = React.useState(false);
  const handleOpenW = () => setOpenW(true);
  const handleCloseW = () => setOpenW(false);
  const questions = useSelector((state) => state.level?.levels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions(niveau));
  }, [questions?.length,niveau]);

  return (
    <div className="contain  ">
      <h1 className="title">{progress!=="100%"?questions?.Level?.type:`العب و اربح مع جليسكم 🎉
`}</h1>
      <div className="todo-app col-10">
        <div className="w-100">
          <div className="progress">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: progress, background: "#48184c" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
{     progress!=="100%" ?  <div style={{ padding: 30 }}>
          <div>
            <p
              style={{
                fontSize: 60,
                fontWeight: 70,
                whiteSpace: "no-wrap",
                direction: "rtl",
                color: "#000"
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
                  className={`background col-5 text-center rounded text-dark fs-4 ${
                    clicked &&
                    (elem.isTrue ? "backgroundWinner text-white" : "backgroundLoser text-white")
                  }`}
                  key={i}
                  onClick={() => {
                    setClicked(true);
                    elem.isTrue ? setOpenR(true) : setOpenW(true);
                  }}
                >
                  {elem.answer}
                </p>
              ))}
            </div>
          </div>
        </div>:
<div style={{ padding: 30,height:"80vh" ,display:"flex" , justifyContent:"center" , alignItems:"center"}}>
  <WheelWinner/>
</div>}
        <Rmodal handleClose={handleCloseR} open={openR} setNiveau={setNiveau} setProgress={setProgress} niveau={niveau} progress={progress} setClicked={setClicked} clicked={clicked} setOpen={setOpenR}/>
        <WModal handleClose={handleCloseW} open={openW} />
      </div>
    </div>
  );
}
