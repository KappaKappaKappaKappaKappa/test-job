import "./Landing.css";

function Landing() {
  const width__768 = window.innerWidth > 768;
  return (
    <section className="landing">
      <div className="landing__left-container">
        <div className="landing__title-container">
          <h1 className="landing__title">Зарабатывайте больше</h1>
          <h2 className="landing__subtitle">
            <p className="landing__subtitle-text">с WELBEX</p>
          </h2>
        </div>
        <p className="landing__description">
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className="landing__right-container">
        <h3 className="landing__right-subtitle">
          Вместе с{" "}
          <p className="landing__right-subtitle-text">
            бесплатной консультацией{" "}
          </p>
          мы дарим:
        </h3>
        {width__768 && (
          <div className="landing__info-container">
            <div className="landing__container-text">
              <h4 className="landing__text-title">Виджеты</h4>
              <p className="landing__text">30 готовых решений</p>
            </div>
            <div className="landing__container-text">
              <h4 className="landing__text-title">Dashboard</h4>
              <p className="landing__text">с показателями вашего бизнеса</p>
            </div>
            <div className="landing__container-text">
              <h4 className="landing__text-title">Skype Аудит</h4>
              <p className="landing__text">отдела продаж и CRM системы</p>
            </div>
            <div className="landing__container-text">
              <h4 className="landing__text-title">35 дней</h4>
              <p className="landing__text">использования CRM</p>
            </div>
          </div>
        )}
        {!width__768 && (
          <div className="landing__info-container">
            <div className="landing__container-text">
              <h4 className="landing__text-title">Skype аудит</h4>
            </div>
            <div className="landing__container-text">
              <h4 className="landing__text-title">30 виджетов</h4>
            </div>
            <div className="landing__container-text">
              <h4 className="landing__text-title">Dashboard</h4>
            </div>
            <div className="landing__container-text">
              <h4 className="landing__text-title">Месяц аmoCRM</h4>
            </div>
          </div>
        )}
        <button className="landing__btn-get-help">Получить консультацию</button>
      </div>
    </section>
  );
}

export default Landing;
