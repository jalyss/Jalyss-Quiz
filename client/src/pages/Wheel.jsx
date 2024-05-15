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
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchWheelProp());
  }, [dispatch]);

  useEffect(() => {
    let aux = [];
    wheelPropositions?.forEach((e) => {
      aux.push(
        {
          option: e?.label,
          style: { backgroundColor: "#49BEFF", textColor: "white" },
          ...e
        },
        {
          option: "حظ موفق المره القادمه",
          style: { backgroundColor: "white" }
        }
      );
    });
    setData(aux);
  }, [wheelPropositions?.length]);
  console.log(data, "this is data");

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center ">
      {data?.length && (
        <div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            fontSize={14}
            fontWeight={"bold"}
            radiusLineWidth={2}
            outerBorderColor="#49BEFF"
            radiusLineColor="white"
            onStopSpinning={() => {
              setMustSpin(false);

              console.log(data[prizeNumber], prizeNumber);
              setPrize(data[prizeNumber]);
              if (data[prizeNumber]?.reward) {
                dispatch(
                  participantReward({
                    id: JSON.parse(localStorage.getItem("participantId")),
                    reward: data[prizeNumber].id
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
              style={{ backgroundColor: "#49BEFF", color: "white" }}
              onClick={handleSpinClick}
            >
              ابدأ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WheelWinner;
