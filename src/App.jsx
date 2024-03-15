import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import About from "./Page/About";
import Choose from "./Page/Choose";
import Dream from "./Page/Dream";
import FindBestRealEstate from "./Page/FindBestRealEstate";
import Hero from "./Page/Hero";
import Residences from "./Page/Residences";
import Search from "./Page/Search";
import Service from "./Page/Service";
import Team from "./Page/Team";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Search />
      <About />
      <Service />
      <Residences />
      <FindBestRealEstate />
      <Choose />
      <Team />
      <Dream />
      <Footer />
    </div>
  );
}

export default App;
