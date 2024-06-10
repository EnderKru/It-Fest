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
                            <div className="village-text">
                                <h2>Бесплатное участие</h2>
                                <h1>0 сом</h1>
                                <p>Бесплатный ночлег в палатке на территорий культурного центра Рух Ордо</p>
                            </div>
                            <div className="village-img">
                                <img src={free} alt="" />
                            </div>
                        </div>
                        <div className="eco-pocket">
                             <div className="village-text">
                             <h2>Эконом</h2>
                             <h1>1800 сом</h1>
                             <p>Комфортные номера с проживанием на 2 дня в уютных коттеджах расположенных на берегу Иссык-Куля</p>
                            </div>
                            <div className="village-img">
                            <img src={eco} alt="" />
                            </div>
                        </div>
                        <div className="vip-pocket">
                            <div className="village-text">
                            <h2>VIP участник</h2>
                            <h1>10000 сом</h1>
                            <p>Уютные VIP номера включающие в себя проживание и питание на 2 дня в роскошных коттеджах расположенных на берегу Иссык-Куля</p>
                            </div>
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