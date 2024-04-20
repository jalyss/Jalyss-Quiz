import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useDispatch, useSelector } from "react-redux";
import { fetchWheelProp } from "../store/wheelProp";
import { participantReward } from "../store/participantSlice";
function WheelWinner({ setOpen, setPrize }) {
  const wheelPropositions = useSelector((state) => state.wheelProp.wheelprop);
  console.log(wheelPropositions, "those are wheel propostitions");
  const dispatch = useDispatch();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  useEffect(() => {
    dispatch(fetchWheelProp());
  }, [dispatch]);

  const data = [
    {
      option: wheelPropositions[0]?.label,
      style: { backgroundColor: "#64113F", textColor: "white" },
      ...wheelPropositions[0],
    },
    {
      option: "حظ موفق المره القادمه",
      style: { backgroundColor: "white" },
    },
    {
      option: wheelPropositions[1]?.label,
      style: { backgroundColor: "#64113F", textColor: "white" },
      ...wheelPropositions[1],
    },
    {
      option: "حظ موفق المره القادمه",
      style: { backgroundColor: "white" },
    },
    {
      option: wheelPropositions[2]?.label,
      style: { backgroundColor: "#64113F", textColor: "white" },
      ...wheelPropositions[2],
    },
    { option: "حظ موفق المره القادمه", style: { backgroundColor: "white" } },
    {
      option: wheelPropositions[3]?.label,
      style: { backgroundColor: "#64113F", textColor: "white" },
      ...wheelPropositions[3],
    },
    { option: "حظ موفق المره القادمه", style: { backgroundColor: "white" } },
    {
      option: wheelPropositions[4]?.label,
      style: { backgroundColor: "#64113F", textColor: "white" },
      ...wheelPropositions[4],
    },
    { option: "حظ موفق المره القادمه", style: { backgroundColor: "white" } },
    {
      option: wheelPropositions[5]?.label,
      style: { backgroundColor: "#64113F", textColor: "white" },
      ...wheelPropositions[5],
    },
    {
      option: "حظ موفق المره القادمه",
      style: { backgroundColor: "white" },
    },
    {
      option: wheelPropositions[6]?.label,
      style: { backgroundColor: "#64113F", textColor: "white" },
      ...wheelPropositions[6],
    },
    { option: "حظ موفق المره القادمه", style: { backgroundColor: "white" } },
  ];
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={14}
          fontWeight={"bold"}
          radiusLineWidth={2}
          outerBorderColor="#64113F"
          radiusLineColor="white"
          onStopSpinning={() => {
            setMustSpin(false);

            console.log(data[prizeNumber], prizeNumber);
            setPrize(data[prizeNumber]);
            if (data[prizeNumber]?.reward) {
              dispatch(
                participantReward({
                  id: JSON.parse(localStorage.getItem("participantId")),
                  reward: data[prizeNumber].id,
                })
              ).then((res) => {
                setOpen(true);
              });
            } else {
              setOpen(true);
            }
          }}
        />
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-light mt-5 w-50 fs-5"
            style={{ backgroundColor: "#64113F", color: "white" }}
            onClick={handleSpinClick}
          >
            ابدأ
          </button>
        </div>
      </div>
    </div>
  );
}

export default WheelWinner;
