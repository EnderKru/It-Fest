import React from 'react'
import './subbaner.css'
import video from '../../assets/common/videoo.mp4'
import imglogo from '../../assets/common/subbaner-logo.svg'

export default function Subbaner() {
  return (
    <div>
        <div className="subbanner">
            <div className='container-subbaner'>
            <div className="title-sub">
                <img src={imglogo} alt="" />
            </div>
            <p>Присоединяйтесь к крупнейшему мероприятию в Средней Азии по стартапам и технологиям</p>
            </div>

            <div className="overlayy"></div>
        <video className="video-background" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        ss
        {/* Your browser does not support the video tag. */}
      </video>
        </div>
    </div>
  )
}
