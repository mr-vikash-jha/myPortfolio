import Header from "./components/Header/Header";
import css from "./styles/app.module.scss";
import "../src/styles/global.scss";
import Hero from "./components/Header/hero/hero";
import Expertise from "./components/Expertise/Expertise";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Work/>
      <Portfolio/>
      <People/>
      <Footer/>
    </div>
  );
};
export default App;
