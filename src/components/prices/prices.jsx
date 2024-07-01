import React from "react";
import "./prices.css";
import cyberlogo from "../../assets/cbrlogo.svg";
const prices = () => {
  return (
    <div className="conteiner">
      <div className="pricesBlock_main">
        <div className="pricesBlock_1">
          <div className="pricesCard1">
            <img src={cyberlogo} alt="" />
            <h3>
              СТАНДАРТ
              <br /> УЧАСТНИК
            </h3>
          </div>
          <div className="pricesCardInfo">
            <h3>
              СТАНДАРТ
              <br />
              5000 сом
            </h3>
            <ul>
              <li>Трансфер - туда и обратно</li>
              <li>Проживание 2 дня</li>
              <li>Питание 3-ёх разовое</li>
              <li>Участие в турнирах</li>
              <li>Шоу программа</li>
              <li>Конкурсы и призы от МБАНК</li>
            </ul>
          </div>
        </div>
        <div className="pricesBlock_2">
          <div className="pricesCard2">
            <img src={cyberlogo} alt="" />
            <h3>
              VIP <br /> УЧАСТНИК
            </h3>
          </div>
          <div className="pricesCardInfo">
            <h3>
              ВИП
              <br />
              15 000 сом{" "}
            </h3>
            <ul>
              <li>Трансфер - туда и обратно</li>
              <li>Проживание 2 дня</li>
              <li>Питание 3-ёх разовое</li>
              <li>Участие в турнирах</li>
              <li>Шоу программа</li>
              <li>Конкурсы и призы от МБАНК</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricesBSG">
        <div>
          <div className="pricesBSG_cards prCard1">
            <img src={cyberlogo} alt="" />
            <h3>
              IT ЭКСПО
              <br />
              УЧАСТНИК
              <br />
              <span style={{ color: "#DB781B" }}>BRONZE</span>
            </h3>
          </div>
          <div className="pricesBronze">
            <h3>
              БРОНЗА <br />
              15 000 сом
            </h3>
            <ul>
              <li>Выставочное место 3 на 2 м.</li>
              <li>Трансфер - туда и обратно</li>
              <li>Участие в турнирах</li>
              <li>Участие на IT выставке</li>
              <li>Шоу программа</li>
              <li>Конкурсы и призы от МБАНК</li>
              <li>Электричество и освещение</li>
              <li>Удлинитель</li>
              <li>Размещение логотипа на сайте и в публикациях Instagram</li>
              <li>Размещение логотипа на 6 LED экранах</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="pricesBSG_cards prCard2">
            <img src={cyberlogo} alt="" />
            <h3>
              IT ЭКСПО
              <br />
              УЧАСТНИК
              <br />
              <span style={{ color: "#BCC1C2" }}>SILVER</span>
            </h3>
          </div>
          <div className="pricesSilver">
            <h3>
              СИЛВЕР
              <br /> 25 000 сом
            </h3>
            <ul>
              <li>Выставочное место 3 на 2 м.</li>
              <li>Трансфер - туда и обратно</li>
              <li>Участие в турнирах</li>
              <li>Участие на IT выставке</li>
              <li>Шоу программа</li>
              <li>Конкурсы и призы от МБАНК</li>
              <li>Электричество и освещение</li>
              <li>Удлинитель</li>
              <li>Размещение логотипа на сайте и в публикациях Instagram</li>
              <li>Размещение логотипа на 6 LED экранах</li>
              <li>Участие в B2B встречах</li>
              <li>2 пригласительных билета на концерт (фан - зона)</li>
              <li>Возможность раздачи буклетов при регистрации</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="pricesBSG_cards prCard3">
            <img src={cyberlogo} alt="" />
            <h3>
              IT ЭКСПО
              <br />
              УЧАСТНИК
              <br />
              <span style={{ color: "#FFCF40" }}>GOLD</span>
            </h3>
          </div>
          <div className="pricesGold">
            <h3>
              ГОЛД
              <br /> 35 000 сом
            </h3>
            <ul>
              {" "}
              <li>Выставочное место 3 на 2 м.</li>
              <li>Трансфер - туда и обратно</li>
              <li>Участие в турнирах</li>
              <li>Участие на IT выставке</li>
              <li>Шоу программа</li>
              <li>Конкурсы и призы от МБАНК</li>
              <li>Электричество и освещение</li>
              <li>Удлинитель</li>
              <li>Размещение логотипа на сайте и в публикациях Instagram</li>
              <li>Размещение логотипа на 6 LED экранах</li>
              <li>Участие в B2B встречах</li>
              <li>2 пригласительных билета на концерт (фан - зона)</li>
              <li>Возможность раздачи буклетов при регистрации</li>
              <li>База контактных данных участников турнира</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default prices;
