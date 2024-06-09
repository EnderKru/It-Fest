import './village.css'
import bg from '../../assets/village-back.svg'
import free from '../../assets/palatka.svg'
import eco from '../../assets/eco.svg'
import vip from '../../assets/vip.svg'

export default function Village(){
    return(
        <div className="village" style={{ backgroundImage: `url(${bg})`}}>
            <div className="conteiner">
                <div className="village-content">
                    <div className="village-tittle">
                        Уважаемые участники, участие в ITFEST 2024 БЕСПЛАТНОЕ. Мы заранее позаботились и подготовили для вас три варианта проживания :
                    </div>
                    <div className="pockets">
                        <div className="free-pocket">
                            <h2>Бесплатное участие</h2>
                            <div className='main-value'>
<div>
                            <h1>0 сом</h1>
                            <ul>
                                <li>Бесплатный ночлег в палатке на территорий культурного центра Рух Ордо</li>
                            </ul>
                            </div>
                           

                            <div className="village-img">
                                <img src={free} alt="" />
                            </div>
                            </div>  
                        </div>
                        <div className="eco-pocket">
                            <h2>Эконом</h2>
                            <h1>1800 сом</h1>
                            <ul>
                                    <li>Комфортные номера с проживанием на 2 дня в уютных коттеджах расположенных на берегу Иссык-Куля</li>
                            </ul>
                            <div className="village-img">
                                <img src={eco} alt="" />
                            </div>
                        </div>
                        <div className="vip-pocket">
                            <h2>VIP участник</h2>
                            <h1>10000 сом</h1>
                            <ul>
                                    <li>Уютные VIP номера включающие в себя проживание и питание на 2 дня в роскошных коттеджах расположенных на берегу Иссык-Куля</li>
                            </ul>
                            <div className="village-img">
                                <img src={vip} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}