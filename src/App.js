//import all the different components
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import EnjoyTv from "./Components/EnjoyTv";
import Download from "./Components/Download";
import Watch from "./Components/Watch";
import Kids from "./Components/Kids";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";

//putting horizontal rules between each functional component
function App() {
  return (
    <div className="App">
      <HomePage />
      <hr style={{ border: "solid grey 4px" }} />
      <EnjoyTv where="Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray, " />
      <hr style={{ border: "solid grey 4px" }} />
      <Download />
      <hr style={{ border: "solid grey 4px" }} />
      <Watch />
      <hr style={{ border: "solid grey 4px" }} />
      <Kids />
      <hr style={{ border: "solid grey 4px" }} />
      <Questions />
      <br />
      <hr style={{ border: "solid grey 4px" }} />
      <br />
      <Footer />
      <br />
      <br />
    </div>
  );
}

export default App;
