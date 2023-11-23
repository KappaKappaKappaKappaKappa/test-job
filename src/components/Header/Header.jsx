import "./Header.css";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsUp from "../../images/whats-up.svg";
function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <div className="header__logo-images">
          <img src={logo1} alt="Логотип Компании" className="header__logo-1" />
          <img src={logo2} alt="Логотип Компании" className="header__logo-2" />
        </div>
        <p className="header__logo-info">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </nav>
      <span className="header__number">+7 555 555-55-55</span>
      <div className="header__links-container">
        <img
          className="header__link-icon"
          src={telegram}
          alt="Иконка телеграма"
        />
        <img className="header__link-icon" src={viber} alt="Иконка Вайбера" />
        <img className="header__link-icon" src={whatsUp} alt="Иконка ВатсАпа" />
      </div>
    </header>
  );
}

export default Header;
