import "./App.css";
import "../../vendor/normalize.css";
import "../../vendor/fonts.css";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import redBallBig from "../../images/red-ball-big.svg";
import redBallSmall from "../../images/red-ball-small.svg";
import purpleBall from "../../images/purple-ball.svg";

function App() {
  return (
    <section className="app">
      <img
        src={redBallBig}
        alt="Красный большой шар"
        className="app__red-ball-big"
      />
      <img
        src={redBallSmall}
        alt="Красный маленький шар"
        className="app__red-ball-small"
      />
      <img src={purpleBall} alt="Фиолетовый шар" className="app__purple-ball" />
      <Header />
      <Landing />
      <Footer />
    </section>
  );
}

export default App;
