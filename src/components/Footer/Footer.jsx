import "./Footer.css";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsUp from "../../images/whats-up.svg";

function Footer() {
  const width_768 = window.innerWidth > 768
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <p className="footer__title">О компании</p>
          <div className="footer__about-container">
            <p className="footer__about-text">Партнёрская программа</p>
            <p className="footer__about-text">Вакансии</p>
          </div>
        </div>
        <div className="footer__menu">
          <p className="footer__title">Меню</p>
          {width_768 && <div className="footer__menu-container">
            <p className="footer__menu-text">Расчёт стоимости</p>
            <p className="footer__menu-text">Кейсы</p>
            <p className="footer__menu-text">Услуги</p>
            <p className="footer__menu-text">Благодарственные письма</p>
            <p className="footer__menu-text">Виджеты</p>
            <p className="footer__menu-text">Сертификаты</p>
            <p className="footer__menu-text">Интеграции</p>
            <p className="footer__menu-text">Блог на Youtube</p>
            <p className="footer__menu-text">Наши клиенты</p>
            <p className="footer__menu-text">Вопрос / Ответ</p>
          </div>}
          {!width_768 && <div className="footer__menu-container">
            <p className="footer__menu-text">Расчёт стоимости</p>
            <p className="footer__menu-text">Благодарность клиентов</p>
            <p className="footer__menu-text">Услуги</p>
            <p className="footer__menu-text">Кейсы</p>
            <p className="footer__menu-text">Виджеты</p>
            <p className="footer__menu-text">Сертификаты</p>
            <p className="footer__menu-text">Интеграции</p>
            <p className="footer__menu-text">Блог на Youtube</p>
            <p className="footer__menu-text">Наши клиенты</p>
            <p className="footer__menu-text">Вопрос / Ответ</p>
          </div>}
        </div>
        <div className="footer__contacts">
          <p className="footer__title-contacts">Контакты</p>
          <div className="footer__contacts-container">
            <p className="footer__contacts-nubmber">+7 555 555-55-55</p>
            <div className="footer__contacts-icon-container">
              <img
                className="footer__icon"
                src={telegram}
                alt="Иконка Telegram"
              />
              <img className="footer__icon" src={viber} alt="Иконка Viber" />
              <img
                className="footer__icon"
                src={whatsUp}
                alt="Иконка Whats-Up"
              />
            </div>
            <p className="footer__contacts-adress">
              Москва, Путевой проезд 3с1, к 902
            </p>
          </div>
        </div>
      </div>
      <div className="footer__info-container">
        <p className="footer__root">©WELBEX 2022. Все права защищены.</p>
        <p className="footer__policy">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
