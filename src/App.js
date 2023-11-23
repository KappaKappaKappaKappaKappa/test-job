import "./App.css";
import "./vendor/normalize.css";
import "./vendor/fonts.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <section className="app">
      <Header />
      <Landing />
    </section>
  );
}

export default App;
