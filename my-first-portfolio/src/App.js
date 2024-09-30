import logo from './logo.svg';
import './App.css';
import './app.scss';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {CardView} from './components/CardView';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <CardView imgAlt="Card" />
    </div>
  );
}

export default App;
