import React from "react";
import Lottie from "react-lottie";
import participant from "../assets/lotties/participant.json";
import user from "../assets/lotties/user.json";
import gift from "../assets/lotties/gift.json";
import { buttonColor } from "../colors/buttonsColor";
import LineDemo from "../component/LineDemo";
import DoughnutChartDemo from "../component/DoughnutChartDemo";
import RadarDemo from "../component/RadarDemo";
import wrong from "../assets/lotties/wired-gradient-1092-applause.json";
import correct from "../assets/lotties/wired-gradient-1780-medal-first-place.json";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

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
    <Container maxWidth="xl">
      <div class="p-3">
        <div
          className="d-flex  p-1 justify-content-between  flex-wrap "
          style={{ gap: "40px" }}
        >
          <div
            className="card  rounded-5 align-items-center d-flex flex-column justify-content-center shadow border-0"
            style={{ width: "20rem", height: "13rem" }}
          >
            <div className="card-body d-flex  align-items-center justify-content-center">
              <div className="d-flex justify-content-center align-items-center">
                <Lottie options={defaultOptions} height={110} width={110} />
              </div>
              <div>
                <h5
                  className="card-title text-center"
                  style={{
                    color: buttonColor,
                    marginBottom: 0,
                    fontSize: "4rem"
                  }}
                >
                  4.1M
                </h5>
                <p className="card-text fs-5 text-center" style={{ color: "gray" }}>
                  Total Participants
                </p>
              </div>
            </div>
          </div>
          <div
            className="card  rounded-5 align-items-center d-flex flex-column justify-content-center shadow border-0"
            style={{ width: "20rem", height: "13rem" }}
          >
            <div className="card-body d-flex  align-items-center justify-content-center">
              <div className="d-flex justify-content-center align-items-center">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: correct,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  height={110}
                  width={110}
                />
              </div>
              <div>
                <h5
                  className="card-title text-center"
                  style={{
                    color: buttonColor,
                    marginBottom: 0,
                    fontSize: "4rem"
                  }}
                >
                  4.1M
                </h5>
                <p className="card-text fs-5 text-center" style={{ color: "gray" }}>
                  Total of Correct answers
                </p>
              </div>
            </div>
          </div>
          <div
            className="card  rounded-5 align-items-center d-flex flex-column justify-content-center shadow border-0"
            style={{ width: "20rem", height: "13rem" }}
          >
            <div className="card-body d-flex  align-items-center justify-content-center">
              <div className="d-flex justify-content-center align-items-center">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: wrong,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  height={110}
                  width={110}
                />
              </div>
              <div>
                <h5
                  className="card-title text-center"
                  style={{
                    color: buttonColor,
                    marginBottom: 0,
                    fontSize: "4rem"
                  }}
                >
                  4.1M
                </h5>
                <p className="card-text fs-5 text-center" style={{ color: "gray" }}>
                  Total of wrong answers
                </p>
              </div>
            </div>
          </div>
          <div
            className="card  rounded-5 align-items-center d-flex flex-column justify-content-center shadow border-0"
            style={{ width: "20rem", height: "13rem" }}
          >
            <div className="card-body d-flex  align-items-center justify-content-center">
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
                  height={110}
                  width={110}
                />
              </div>
              <div>
                <h5
                  className="card-title text-center"
                  style={{
                    color: buttonColor,
                    marginBottom: 0,
                    fontSize: "4rem"
                  }}
                >
                  4.1M
                </h5>
                <p className="card-text fs-5 text-center" style={{ color: "gray" }}>
                  Total Participants
                </p>
              </div>
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
        {/* <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}
      </div>
    </Container>
  );
}

export default Dashboard;
