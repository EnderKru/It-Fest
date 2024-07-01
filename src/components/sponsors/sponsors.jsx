import React from "react";
import "./sponsors.css";
import imgorg1 from "../../assets/common/organiz-img1.svg";
import imgorg3 from "../../assets/common/organiz-img3.svg";
import admlog from "../../assets/common/adml.svg";
import imgorg8 from "../../assets/common/organiz-img8.svg";
import imgorg9 from "../../assets/common/organiz-img9.svg";
import imgorg10 from "../../assets/common/organiz-img10.svg";
import imgorg12 from "../../assets/common/organiz-img12.svg";
import imgorg14 from "../../assets/common/organiz-img14.svg";
import imgorg15 from "../../assets/common/organiz-img15.svg";
import imgorg16 from "../../assets/common/organiz-img16.svg";
import imgorg17 from "../../assets/common/organiz-img17.svg";
import imgorg18 from "../../assets/common/organiz-img18.svg";
import imgorg20 from "../../assets/common/organiz-img20.svg";
import bspon from "../../assets/common/sponsord-bg.svg";
import imgorg01 from "../../assets/common/img1.svg";
import imgorg02 from "../../assets/common/img2.svg";
import imgorg03 from "../../assets/common/img3.svg";
import imgorg04 from "../../assets/common/img4.svg";
import imgorg05 from "../../assets/common/img5.svg";

export default function Sponsors() {
  return (
    <div
      className="wrapper-organiz"
      style={{ backgroundImage: `url(${bspon})` }}>
      <div className="wrapp-org">
        <div className="organization">
          <div className="title-org">Организаторы</div>
          <div className="main-org">
            <img src={imgorg1} alt="" className="img-balai" />
            <img src={imgorg3} alt="" className="img-balai" />
            <img src={admlog} alt="" className="img-balai" />
          </div>
        </div>

        <div className="organization">
          <div className="title-org">Партнеры</div>
          <div className="main-org" style={{ marginBottom: "0" }} id="main-org">
            <img src={imgorg8} style={{ marginBottom: "2rem" }} alt="" />
            <img src={imgorg9} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg10} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg15} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg12} alt="" style={{ marginBottom: "2rem" }} />
            {/* <img src={imgorg13} alt="" /> */}
            <img src={imgorg14} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg20} alt="" style={{ marginBottom: "2rem" }} />

            <img src={imgorg16} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg17} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg18} alt="" style={{ marginBottom: "2rem" }} />

            <img src={imgorg01} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg02} alt="" style={{ marginBottom: "2rem" }} />

            <img src={imgorg03} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg04} alt="" style={{ marginBottom: "2rem" }} />
            <img src={imgorg05} alt="" style={{ marginBottom: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
