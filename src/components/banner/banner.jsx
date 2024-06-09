import React from 'react'
import './bannerModule.css'
import logo from '../../assets/common/banner-logo.svg'

export default function Banner() {
  return (
    <>
    
      <div className='banner' >
        <div className="overlay"></div>
        <div>
     <div className="title-banner" >
     ПРИ ПОДДЕРЖКЕ 
     
ГОСУДАРСТВЕННОГО УЧРЕЖДЕНИЯ
     </div>
     <div className="logo-banner">
<img src={logo} alt=""  className='img-logo-banner'/>
     </div>
     </div>
     
    
        </div>
        </>
  )
}
