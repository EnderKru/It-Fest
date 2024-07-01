import "./directions.css";
import { useState } from "react";
import hack from "../../assets/hackaton.svg";
import ext from "../../assets/to extend.svg";
import close from "../../assets/to close.svg";
import mobi from "../../assets/mobi.svg";
import csec from "../../assets/cybersec.svg";
import des from "../../assets/design.svg";
import cs from "../../assets/cybersport.svg";
import drons from "../../assets/drons.svg";
import rob from "../../assets/robots.svg";
import exh from "../../assets/it exh.svg";
import { useNavigate } from "react-router-dom";

const ToggleButton = ({ id, isActive, onClick }) => {
  return (
    <button className="toggle-button" onClick={() => onClick(id)}>
      <img src={isActive ? ext : close} alt="Toggle visibility" />
    </button>
  );
};

const ToggleText = ({ isActive, children }) => {
  return (
    <div className={`slide-text ${isActive ? "visible" : ""}`}>{children}</div>
  );
};

export function Directions() {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  const navigate = useNavigate();
  return (
    <div className="directions" id="section1">
      <div className="conteiner">
        <div className="dir-content">
          <div className="dir-tittle">Направления фестиваля</div>
          <div className="choices">
            <div className="dir-info">
              <div className="act-part">
                <div className="act-tittle-one">
                  <h1>ХАКАТОН</h1>
                </div>
                <div className="act-button-one">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
              <div
                className="info-part"
                style={{ backgroundImage: `url(${hack})` }}>
                <div className="more-info-one">
                  <div className="more-info-content">
                    <h1>Подробнее</h1>
                    <ToggleButton
                      id="1"
                      isActive={activeId === "1"}
                      onClick={handleToggle}
                    />
                  </div>

                  <ToggleText isActive={activeId === "1"}>
                    <p>
                      Турнир будет организован в формате хакатона, призванный
                      обеспечить участников мероприятия необходимыми знаниями и
                      навыками в области информационных технологий, а также
                      продемонстрировать их роль и важность в современном мире.
                    </p>
                  </ToggleText>
                </div>
              </div>
            </div>
            <div className="dir-info">
              <div
                className="info-part"
                style={{ backgroundImage: `url(${mobi})` }}>
                <div className="more-info-two">
                  <div className="more-info-content">
                    <ToggleButton
                      id="2"
                      isActive={activeId === "2"}
                      onClick={handleToggle}
                    />
                    <h1>Подробнее</h1>
                  </div>
                  <ToggleText isActive={activeId === "2"}>
                    <p>
                      В секции «Мобилография» принимают участие творческие видео
                      работы в форматах: рекламных роликов, интернет-видео,
                      видео блоги, короткометражные фильмы и так далее. Перед
                      вашей командой будет поставлена задача стать съемочной
                      командой и снять сюжет на заданную тему
                    </p>
                  </ToggleText>
                </div>
              </div>
              <div className="act-part">
                <div className="act-tittle-two" id="mobi">
                  <h1 className="">МОБИЛОГРАФИЯ</h1>
                </div>
                <div className="act-button-two">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
            </div>
            <div className="dir-info">
              <div className="act-part">
                <div className="act-tittle-one" id="csec">
                  <h1>КИБЕР-БЕЗОПАСНОСТЬ</h1>
                </div>
                <div className="act-button-one">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
              <div
                className="info-part"
                style={{ backgroundImage: `url(${csec})` }}>
                <div className="more-info-one">
                  <div className="more-info-content" onClick={handleToggle}>
                    <h1>Подробнее</h1>
                    <ToggleButton
                      id="3"
                      isActive={activeId === "3"}
                      onClick={handleToggle}
                    />
                  </div>
                  <ToggleText isActive={activeId === "3"}>
                    <p>
                      Секция: КибербезопасностьЦелями проведения соревнования
                      являются развитие CTF-движения в Кыргызстане и привлечение
                      студентов к этичному хакингу
                    </p>
                  </ToggleText>
                </div>
              </div>
            </div>
            <div className="dir-info">
              <div
                className="info-part"
                style={{ backgroundImage: `url(${cs})` }}>
                <div className="more-info-two">
                  <div className="more-info-content">
                    <ToggleButton
                      id="4"
                      isActive={activeId === "4"}
                      onClick={handleToggle}
                    />
                    <h1>Подробнее</h1>
                  </div>
                  <ToggleText isActive={activeId === "4"}>
                    <p>
                      Секция: КиберспортТурнир проводится с целью популяризации
                      и развития киберспорта среди молодёжи и более старшего
                      возраста
                    </p>
                  </ToggleText>
                </div>
              </div>
              <div className="act-part">
                <div className="act-tittle-two">
                  <h1>КИБЕРСПОРТ</h1>
                </div>
                <div className="act-button-two">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
            </div>
            <div className="dir-info">
              <div className="act-part">
                <div className="act-tittle-one" id="des">
                  <h1>ДИЗАЙН И АНИМАЦИИ</h1>
                </div>
                <div className="act-button-one">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
              <div
                className="info-part"
                style={{ backgroundImage: `url(${des})` }}>
                <div className="more-info-one">
                  <div className="more-info-content">
                    <h1>Подробнее</h1>
                    <ToggleButton
                      id="5"
                      isActive={activeId === "5"}
                      onClick={handleToggle}
                    />
                  </div>
                  <ToggleText isActive={activeId === "5"}>
                    <p>
                      Команды от 3-5 человека ~ команда (люди, интересующиеся
                      мультяшными вебтунами, люди, прошедшие обучение вебтунам и
                      т.д.) за 24 часа создают электронный комикс (вебтун) от 6
                      - 10 кадров с использованием необычных аудио-визуальных
                      эффектов и анимации.
                    </p>
                  </ToggleText>
                </div>
              </div>
            </div>
            <div className="dir-info">
              <div
                className="info-part"
                style={{ backgroundImage: `url(${exh})` }}>
                <div className="more-info-two">
                  <div className="more-info-content">
                    <ToggleButton
                      id="6"
                      isActive={activeId === "6"}
                      onClick={handleToggle}
                    />
                    <h1>Подробнее</h1>
                  </div>
                  <ToggleText isActive={activeId === "6"}>
                    <p>
                      Данная секция представляет собой международную выставку,
                      которая является символом индустриализации и открытой
                      площадкой для демонстрации технических и технологических
                      достижений.
                    </p>
                  </ToggleText>
                </div>
              </div>
              <div className="act-part">
                <div className="act-tittle-two">
                  <h1>IT ВЫСТАВКА</h1>
                </div>
                <div className="act-button-two">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
            </div>
            <div className="dir-info">
              <div className="act-part">
                <div className="act-tittle-one" id="robots">
                  <h1>БИТВА РОБОТОВ</h1>
                </div>
                <div className="act-button-one">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
              <div
                className="info-part"
                style={{ backgroundImage: `url(${rob})` }}>
                <div className="more-info-one">
                  <div className="more-info-content">
                    <h1>Подробнее</h1>
                    <ToggleButton
                      id="7"
                      isActive={activeId === "7"}
                      onClick={handleToggle}
                    />
                  </div>
                  <ToggleText isActive={activeId === "7"}>
                    <p>
                      В рамках секции робототехники состоится серия этапных
                      соревнований для детей в возрасте от 12 до 16 лет. Команды
                      допускаются до трех участников
                    </p>
                  </ToggleText>
                </div>
              </div>
            </div>
            <div className="dir-info">
              <div
                className="info-part"
                style={{ backgroundImage: `url(${drons})` }}>
                <div className="more-info-two">
                  <div className="more-info-content">
                    <ToggleButton
                      id="8"
                      isActive={activeId === "8"}
                      onClick={handleToggle}
                    />
                    <h1>Подробнее</h1>
                  </div>
                  <ToggleText isActive={activeId === "8"}>
                    <p>
                      Регламент гонок на дронах предоставляет возможность всем
                      желающим вне зависимости от умении или опыта пройти
                      специальный маршрут с испытаниями
                    </p>
                  </ToggleText>
                </div>
              </div>
              <div className="act-part">
                <div className="act-tittle-two" id="drons">
                  <h1>ГОНКИ НА ДРОНАХ</h1>
                </div>
                <div className="act-button-two">
                  <button onClick={() => navigate("/signup")}>
                    Участвовать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
