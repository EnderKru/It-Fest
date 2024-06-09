import React from 'react'
import './sponsors.css'
import imgorg1 from '../../assets/common/organiz-img1.svg'
import imgorg2 from '../../assets/common/organiz-img2.svg'
import imgorg3 from '../../assets/common/organiz-img3.svg'
import imgorg4 from '../../assets/common/organiz-img4.svg'
import imgorg5 from '../../assets/common/organiz-img5.svg'
import imgorg6 from '../../assets/common/organiz-img6.svg'
import imgorg7 from '../../assets/common/organiz-img7.svg'
import imgorg8 from '../../assets/common/organiz-img8.svg'
import imgorg9 from '../../assets/common/organiz-img9.svg'
import imgorg10 from '../../assets/common/organiz-img10.svg'
import imgorg11 from '../../assets/common/organiz-img11.svg'
import imgorg12 from '../../assets/common/organiz-img12.svg'
import imgorg13 from '../../assets/common/organiz-img13.svg'
import imgorg14 from '../../assets/common/organiz-img14.svg'
import imgorg15 from '../../assets/common/organiz-img15.svg'
import imgorg16 from '../../assets/common/organiz-img16.svg'
import imgorg17 from '../../assets/common/organiz-img17.svg'
import imgorg18 from '../../assets/common/organiz-img18.svg'
import imgorg20 from '../../assets/common/organiz-img20.svg'
import imgorg21 from '../../assets/common/organiz-img21.svg'
import bspon from '../../assets/common/sponsord-bg.svg'




export default function Sponsors() {
  return (
    <div className='wrapper-organiz'  style={{backgroundImage: `url(${bspon})` }}>

<div className="wrapp-org">

    

        <div className="organization">
            <div className="title-org">
            Организаторы
            </div>
            <div className="main-org">
                <img src={imgorg1} alt="" className='img-balai'/>
                <img src={imgorg3} alt="" className='img-balai'/>

            </div>
        </div>
        <div className="organization">
            <div className="title-org">
            Генеральный спонсор
            </div>
            <div className="main-org1">
                <img src={imgorg4} alt="" className='img-balai' />
            </div>
        </div>
        <div className="organization"id='organization'>
            <div className="title-org">
            Официальный спонсор
            </div>
            <div className="main-org" >
                <img src={imgorg7} alt="" />

            </div>
        </div>
        <div className="organization"id='organization'>
            <div className="title-org">
            Золотой спонсор
            </div>
            <div className="main-org" >
                <img src={imgorg21} alt="" />

            </div>
        </div>
        <div className="organization" >
            <div className="title-org">
            Партнеры
            </div>
            <div className="main-org" style={{marginBottom: '0'}} id='main-org'>
            <img src={imgorg8} style={{marginBottom: '2rem'}}alt="" />
                <img src={imgorg9} alt="" style={{marginBottom: '2rem'}}/>
                <img src={imgorg10} alt="" style={{marginBottom: '2rem'}} />
                <img src={imgorg15} alt=""  style={{marginBottom: '2rem'}}/>
                <img src={imgorg12} alt=""  style={{marginBottom: '2rem'}}/>
                {/* <img src={imgorg13} alt="" /> */}
                <img src={imgorg14} alt=""  style={{marginBottom: '2rem'}}/>
                <img src={imgorg20} alt=""  style={{marginBottom: '2rem'}}/>

                <img src={imgorg16} alt=""  style={{marginBottom: '2rem'}}/>
                <img src={imgorg17} alt=""  style={{marginBottom: '2rem'}}/>
                <img src={imgorg18} alt=""  style={{marginBottom: '2rem'}}/>


            </div>
        </div>

    </div>
    </div>

  )
}
