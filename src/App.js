import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Beers from './pages/Beers';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';
import { Routes, Route } from "react-router-dom";
import RandomBeer from './pages/RandomBeer';


function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route exact path="/beers/:beerId" element={<SingleBeer />} />
        <Route exact path="/beers/create" element={<NewBeer />} />
        <Route exact path="/randombeer" element={<RandomBeer />} />
        <Route exact path="/beers" element={<Beers />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
