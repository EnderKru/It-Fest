import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Corusel from "../../components/corusel/corusel";
import Speakers from "../../components/speakers/speakers";
import Sections from "../../components/sections/sections";
import Map from "../../components/map/map";
import Slider from "../../components/slider-banner/slider";
import Subbaner from "../../components/subbanner/subbaner";
import Timer from "../../components/timer/timer";
import Sponsors from "../../components/sponsors/sponsors";
import { Directions } from "../../components/directions/directions";
import Bonus from "../../components/bonus/bonus";
import { Directions } from "../../components/directions/directions";
import { Footer } from "../../components/footer/footer";
import Village from "../../components/village/village";

export function MainPage() {
  return (
    <>
      <Header />
      <div className="main">
        <Slider />
        <Banner />
        <Subbaner />
        <Timer />

        <Directions />
        {/* <Speakers/> */}
        <Sponsors />
        {/* <Map/> */}
      </div>
      <Footer />
    </>
  );
}
