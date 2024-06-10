import './bonus.css'
import { useState } from 'react'
import bg from '../../assets/bg-bonus.svg'
import bonus from '../../assets/bonus.svg'
import ext from '../../assets/to extend.svg'
import close from '../../assets/to close.svg'


const ToggleButton = ({ id, isActive, onClick }) => {
    return (
        <button className="toggle-button" onClick={() => onClick(id)}>
            <img src={isActive ? close : ext} alt="Toggle visibility" />
        </button>
    );
};
const ToggleText = ({ isActive, children }) => {
    return (
        <div className={`slide-text ${isActive ? 'visible' : ''}`}>
            {children}
        </div>
    );
};
export default function Bonus(){
    const [activeId, setActiveId] = useState(null);

    const handleToggle = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };
    return(
        <div className="bonus" style={{ backgroundImage: `url(${bg})`}}>
            <div className="conteiner">
                <div className="bonus-content">
                    <div className="bonus-tittle">
                    <h1>БОНУС</h1>
                    </div>
                    <div className="bonus-case">
                        <h1>After Party X Suzie Wong</h1>
                        <div className="bonus-info">
                            <div className="bonus-img">
                                <img src={bonus} alt="" />
                            </div>
                            <div className="more-info-one">
                                    <div className="more-info-content">
                                        <h1>
                                            Подробнее
                                        </h1>
                                        <ToggleButton id="1" isActive={activeId === "1"} onClick={handleToggle} />
                                        
                                    </div>
                                    
                                     <ToggleText isActive={activeId === "1"}>
                                        <p>После завершения каждого вечера будут проводиться зажигательные after party в местном клубе Suzie Wong. Дополнительная опция обойдется в 2000 сом.</p>
                                    </ToggleText>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}