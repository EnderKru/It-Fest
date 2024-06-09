import ext from '../../assets/to extend.svg'
import close from '../../assets/to close.svg'
import React from 'react';
import './toExtendBtn.css'

const ToggleButton = ({ id, isActive, onClick, children }) => {
    return (
        <div className="toggle-container">
            <button className="toggle-button" onClick={() => onClick(id)}>
                <img src={isActive ? ext : close} alt="Toggle visibility" />
            </button>
            <div className={`slide-text ${isActive ? 'visible' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default ToggleButton;
