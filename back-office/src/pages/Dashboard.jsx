import React from "react";
import Lottie from "react-lottie";
import participant from "../assets/lotties/participant.json";
import user from "../assets/lotties/user.json";
import gift from "../assets/lotties/gift.json";
import { buttonColor } from "../colors/buttonsColor";
import LineDemo from "../component/LineDemo";
import DoughnutChartDemo from "../component/DoughnutChartDemo";
import RadarDemo from "../component/RadarDemo";

function Dashboard() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: user,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div class="p-3">
      <div
        className="d-flex  p-1 justify-content-between  flex-wrap "
        style={{ gap: "60px" }}
      >
        <div
          className="card  align-items-center d-flex flex-column justify-content-center shadow"
          style={{ width: "25rem", height: "16rem" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <Lottie options={defaultOptions} height={80} width={80} />
              <h5
                className="card-title"
                style={{
                  color: buttonColor,
                  marginBottom: 0,
                  fontSize: "4rem"
                }}
              >
                4.1M
              </h5>
            </div>
            <card className="card-text fs-1 " style={{ color: "gray" }}>
              Total Participants
            </card>
          </div>
        </div>
        <div
          className="card  align-items-center d-flex flex-column justify-content-center shadow"
          style={{ width: "25rem", height: "16rem" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <Lottie options={defaultOptions} height={80} width={80} />
              <h5
                className="card-title"
                style={{
                  color: buttonColor,
                  marginBottom: 0,
                  fontSize: "4rem"
                }}
              >
                4.1M
              </h5>
            </div>
            <card className="card-text fs-1">Total Participants</card>
          </div>
        </div>
        <div
          className="card  align-items-center d-flex flex-column justify-content-center shadow"
          style={{ width: "25rem", height: "16rem" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <Lottie options={defaultOptions} height={80} width={80} />
              <h5
                className="card-title"
                style={{
                  color: buttonColor,
                  marginBottom: 0,
                  fontSize: "4rem"
                }}
              >
                4.1M
              </h5>
            </div>
            <card className="card-text fs-1">Total Participants</card>
          </div>
        </div>
        <div
          className="card  align-items-center d-flex flex-column justify-content-center shadow"
          style={{ width: "25rem", height: "16rem" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: gift,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }}
                height={80}
                width={80}
              />
              <h5
                className="card-title"
                style={{
                  color: buttonColor,
                  marginBottom: 0,
                  fontSize: "4rem"
                }}
              >
                4.1M
              </h5>
            </div>
            <card className="card-text fs-1">Total Participants</card>
          </div>
        </div>
      </div>
      <div class="row align-items-center py-4 flex-wrap">
        <div class="col-9">
          <LineDemo />
        </div>

        <div class="col-3 d-flex justify-content-center flex-column   ">
          <DoughnutChartDemo />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
