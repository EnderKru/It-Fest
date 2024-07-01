import React from "react";
import "./subbaner.css";
// import video from '../../assets/common/videoo.mp4'
import imglogo from "../../assets/common/Group 238.svg";

export default function Subbaner() {
  return (
    <div>
      <div className="subbanner">
        <div className="container-subbaner">
          <div className="title-sub">
            <img src={imglogo} alt="" />
          </div>
          <p>
            Присоединяйтесь к крупнейшему мероприятию в Средней Азии по
            стартапам и технологиям
          </p>
        </div>
        <div className="overlayy"></div>
      </div>
    </div>
  );
}
