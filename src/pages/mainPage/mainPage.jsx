import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import Corusel from '../../components/corusel/corusel'
import Speakers from '../../components/speakers/speakers'
import Sections from '../../components/sections/sections'
import Map from '../../components/map/map'
import Slider from '../../components/slider-banner/slider'
import Subbaner from '../../components/subbanner/subbaner'



export function MainPage(){
    return(
<>
        <Header/>
        <div className="main">
            <Slider/>
        <Banner/>
        <Subbaner/>
        <Corusel/>
        <Speakers/>
        <Sections/>
        <Map/>

        </div>
        <Footer/>

        </>
    )
}