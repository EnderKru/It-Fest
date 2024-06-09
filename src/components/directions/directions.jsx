import './directions.css'
import hack from '../../assets/hackaton.svg'
import ext from '../../assets/to extend.svg'
import mobi from '../../assets/mobi.svg'
import csec from '../../assets/cybersec.svg'
import des from '../../assets/design.svg'
import cs from '../../assets/cybersport.svg'
import drons from '../../assets/drons.svg'
import rob from '../../assets/robots.svg'
import exh from '../../assets/it exh.svg'

export function Directions(){
    return(
        <div className="directions" id='section1'>
            <div className="conteiner">
                <div className="dir-content">
                    <div className="dir-tittle">
                        Направления фестиваля
                    </div>
                    <div className="choices">
                        <div className="dir-info">
                            <div className="act-part">
                                <div className="act-tittle-one">
                                    <h1>
                                        ХАКАТОН
                                    </h1>
                                </div>
                                <div className="act-button-one">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            <div className="info-part"  style={{ backgroundImage: `url(${hack})`}}>  
                                <div className="more-info-one">
                                    <div className="more-info-content">
                                        <h1>
                                            Подробнее
                                        </h1>
                                        <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dir-info">
                            <div className="info-part"  style={{ backgroundImage: `url(${mobi})`}}>  
                                <div className="more-info-two">
                                    <div className="more-info-content">
                                    <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        <h1>
                                            Подробнее
                                        </h1>

                                    </div>
                                </div>
                            </div>
                            <div className="act-part">
                                <div className="act-tittle-two" id='mobi'>
                                    <h1 className=''>
                                        МОБИЛОГРАФИЯ
                                    </h1>
                                </div>
                                <div className="act-button-two">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="dir-info">
                            <div className="act-part">
                                <div className="act-tittle-one" id='csec'>
                                    <h1>
                                        КИБЕР-БЕЗОПАСНОСТЬ
                                    </h1>
                                </div>
                                <div className="act-button-one">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            <div className="info-part"  style={{ backgroundImage: `url(${csec})`}}>  
                                <div className="more-info-one">
                                    <div className="more-info-content">
                                        <h1>
                                            Подробнее
                                        </h1>
                                        <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dir-info">
                            <div className="info-part"  style={{ backgroundImage: `url(${cs})`}}>  
                                <div className="more-info-two">
                                    <div className="more-info-content">
                                    <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        <h1>
                                            Подробнее
                                        </h1>

                                    </div>
                                </div>
                            </div>
                            <div className="act-part">
                                <div className="act-tittle-two">
                                    <h1>
                                        КИБЕРСПОРТ
                                    </h1>
                                </div>
                                <div className="act-button-two">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="dir-info">
                            <div className="act-part">
                                <div className="act-tittle-one" id='des'>
                                    <h1>
                                        ДИЗАЙН И АНИМАЦИИ
                                    </h1>
                                </div>
                                <div className="act-button-one">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            <div className="info-part"  style={{ backgroundImage: `url(${des})`}}>  
                                <div className="more-info-one">
                                    <div className="more-info-content">
                                        <h1>
                                            Подробнее
                                        </h1>
                                        <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dir-info">
                            <div className="info-part"  style={{ backgroundImage: `url(${exh})`}}>  
                                <div className="more-info-two">
                                    <div className="more-info-content">
                                    <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        <h1>
                                            Подробнее
                                        </h1>

                                    </div>
                                </div>
                            </div>
                            <div className="act-part">
                                <div className="act-tittle-two">
                                    <h1>
                                        IT ВЫСТАВКА
                                    </h1>
                                </div>
                                <div className="act-button-two">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="dir-info">
                            <div className="act-part">
                                <div className="act-tittle-one" id='robots'>
                                    <h1>
                                        БИТВА РОБОТОВ
                                    </h1>
                                </div>
                                <div className="act-button-one">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            <div className="info-part"  style={{ backgroundImage: `url(${rob})`}}>  
                                <div className="more-info-one">
                                    <div className="more-info-content">
                                        <h1>
                                            Подробнее
                                        </h1>
                                        <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dir-info">
                            <div className="info-part"  style={{ backgroundImage: `url(${drons})`}}>  
                                <div className="more-info-two">
                                    <div className="more-info-content">
                                    <button className="">
                                            <img src={ext} alt="" className="" />
                                        </button>
                                        <h1>
                                            Подробнее
                                        </h1>

                                    </div>
                                </div>
                            </div>
                            <div className="act-part">
                                <div className="act-tittle-two" id="drons">
                                    <h1>
                                        ГОНКИ НА ДРОНАХ
                                    </h1>
                                </div>
                                <div className="act-button-two">
                                    <button>
                                        Участвовать
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}