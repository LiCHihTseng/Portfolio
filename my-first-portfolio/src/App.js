  import logo from "./logo.svg";

  import "./app.scss";
  import { NavBar } from "./components/navbar/NavBar";
  import { Banner } from "./components/banner/Banner";
  import { CardView } from "./components/CardView";

  import "bootstrap/dist/css/bootstrap.min.css";
  import { Project } from "./components/project/project";

  function App() {
    return (
      <div className="App">
        <section id="Homepage" className="">
          <NavBar />
          <Banner />
        </section>

        <section id="Projects" className=" ">
          <CardView imgAlt="Card" />
        </section>

        {/* <section className=" ">
        <Project/>
        </section> */}

          
        
      </div>
    );
  }

  export default App;
