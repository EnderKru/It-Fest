import './footer.css'
import { useState } from 'react'
import logo from '../../assets/common/footer-logo.svg'
import facebook from '../../assets/telegram.svg'
import youtube from '../../assets/whatsapp.svg'
import insta from '../../assets/instagram.svg'
import bgimg1 from '../../assets/common/footer (1).svg'

export default function Footer(){
    const [isCopied, setIsCopied] = useState(false);
  const [Copied, setCopied] = useState(false);

  const handleCopyPhoneNumber = () => {
    const phoneNumber = ' 0990 888 887 '; 
    navigator.clipboard.writeText(phoneNumber);
    setIsCopied(true); 
    setTimeout(() => setIsCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
  };
  const handleCopyGmail = () => {
    const phoneNumber = 'itfest2024@gmail.com'; 
    navigator.clipboard.writeText(phoneNumber); // Копируем номер в буфер обмена
    setCopied(true); // Устанавливаем флаг копирования в true
    setTimeout(() => setCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
  };
    return(
        <div className="footer" id = 'footer' style={{backgroundImage: `url(${bgimg1})` }}>
            <div className="conteiner">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="logos" className="mgt" />
                    </div>
                    <div className="footer-info">
                        <h2>Для связи по комерческим вопросам:</h2>
                        <div className="numbers">
                            <div className='nums'>
                            <div>
                                <p onClick={handleCopyPhoneNumber}>+996 559 880 208</p>
                                <p onClick={handleCopyPhoneNumber}>+996 708 234 543</p>
                            </div>
                            <div>
                                <p onClick={handleCopyPhoneNumber}>+996 509 545 708</p>
                                <p onClick={handleCopyPhoneNumber}>+996 704 704 716</p>
                            </div>
                            </div>
                            {isCopied && 
              <div className="wrapper-message">
              <div className="copy-message">
                <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} />
                Номер телефона скопирован!
                </div>
                </div>
              }
                            <p onClick={handleCopyGmail} >itfest2024@gmail.com</p>
                            {Copied && 
            <div className="wrapper-message">
            <div className="copy-message">
              <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} />
              Почта скопирована!
              </div>
              </div>
            }
                        </div>
                        <div className="adress">
                            <div><span>Адрес</span> Рух Ордо: J3XW+633, Советская ул., Чолпон-Ата</div>
                            <div><span>Адрес</span> ЦИФРАКОМ: 165 ул. Московская, Бишкек</div>

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