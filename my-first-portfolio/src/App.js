import logo from "./logo.svg";
import "./App.css";
import "./app.scss";
import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/Banner";
import { CardView } from "./components/CardView";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App h-screen snap-y snap-mandatory overflow-y-scroll">
      <section id="Homepage" className="h-screen snap-center">
        <NavBar />
        <Banner />
      </section>

      <section id="Projects" className=" h-screen snap-center">
        <CardView imgAlt="Card" />
      </section>
    </div>
  );
}

export default App;
