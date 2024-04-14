import React from "react";
import { answers } from "../constants/answers";
import Rmodal from "../components/Rmodal";
export default function Quesrions() {
  return (
    <div className="contain  ">
      <h1 className="title">Jalys's Quiz</h1>
      <div className="todo-app col-10">
        <div className="w-100">
          <div className="progress">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: "25%", background: "#48184c" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div style={{ padding: 30 }}>
          <div>
            <p style={{ fontSize: 30, fontWeight: 70 }} className="purple">
              What's the capital of canada ?
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <img
              src="https://www.socialprintstudio.com/img/products/hardcover-photo-book/slider/hardcover-photo-book-2.jpg"
              alt=""
              width="100%"
              style={{ maxHeight: 170, objectFit: "cover" }}
              className="rounded img-fluid"
            />
          </div>
          <div>
            <div className="d-flex flex-wrap gap-2 justify-content-between mt-4 ">
              {answers.map((elem, i) => (
                <p className=" background col-5 text-center rounded" key={i}>
                  {elem}
                </p>
              ))}
            </div>
          </div>
        </div>
      
      <Rmodal/>
      </div>
    </div>
  );
}
