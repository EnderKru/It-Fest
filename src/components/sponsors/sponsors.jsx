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



export default function Sponsors() {
  return (
    <div className='wrapper-organiz'>

<div className="wrapp-org">

    

        <div className="organization">
            <div className="title-org">
            Организаторы
            </div>
            <div className="main-org">
                {/* <a href="https://kenesh.kg/ru"> */}
                <img src={imgorg1} alt="" className='img-balai'/>
                {/* </a> */}
                {/* <a href="https://alatoo.edu.kg/"> */}
                <img src={imgorg2} alt="" className='img-balai'/>
                {/* </a> */}
                {/* <a href="https://baytur-resort.kg/projivanie/"> */}
                <img src={imgorg3} alt="" className='img-balai'/>
                {/* </a> */}

            </div>
        </div>
        <div className="organization">
            <div className="title-org">
            Главный спонсор
            </div>
            <div className="main-org1">
                {/* <a href="https://bakai.kg/en/"> */}
                <img src={imgorg4} alt="" className='img-balai' />
                {/* </a> */}
            </div>
        </div>
        <div className="organization"id='organization'>
            <div className="title-org">
            Cпонсоры
            </div>
            <div className="main-org" >
                {/* <a href="https://www.kia-bishkek.kg/"> */}
                <img src={imgorg5} alt="" />
                <img src={imgorg6} alt="" />
                <img src={imgorg7} alt="" />

                {/* </a> */}
            </div>
        </div>
        <div className="organization" >
            <div className="title-org">
            Партнеры
            </div>
            <div className="main-org">
            <img src={imgorg8} alt="" />
                <img src={imgorg9} alt="" />
                <img src={imgorg10} alt="" />
                <img src={imgorg11} alt="" />

            </div>
        </div>

    </div>
    </div>

  )
}
