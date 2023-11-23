import "./App.css";
import "./vendor/normalize.css";
import "./vendor/fonts.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <section className="app">
      <Header />
      <section className="landing">
        <div className="landing__left-container">
          <div className="landing__title-container">
            <h1 className="landing__title">Зарабатывайте больше</h1>
            <h2 className="landing__subtitle">
              <span className="landing__subtitle-text">с WELBEX</span>
            </h2>
          </div>
          <p className="landing__description">
            Развиваем и контролируем продажи за вас
          </p>
        </div>
        <div className="landing__right-container"></div>
      </section>
    </section>
  );
}

export default App;
