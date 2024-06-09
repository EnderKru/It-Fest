import './footer.css'
import logo from '../../assets/logo-footer.svg'
import facebook from '../../assets/telegram.svg'
import youtube from '../../assets/whatsapp.svg'
import insta from '../../assets/instagram.svg'

export function Footer(){
    return(
        <div className="footer" id = 'footer'>
            <div className="conteiner">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="logos" className="mgt" />
                    </div>
                    <div className="footer-info">
                        <h2>Для связи по комерческим вопросам</h2>
                        <div className="numbers">
                            <p>+996 559 880 208</p>
                        </div>
                        <div className="media-icons">
                            <a href="">
                                <img src={facebook} alt="" className="" />
                            </a>
                            <a href="">
                                <img src={youtube} alt="" className="" />
                            </a>
                            <a href=""> 
                                <img src={insta} alt="" className="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}