import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header";

export default function Beers() {
  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeersData(response.data));
  }, []);

  return (
    <div>
      <Header />
      <h3>All beers</h3>

      {beersData.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beerImg" />
          <Link to={`/beers/${beer._id}`}>
            <h1>{beer.name}</h1>
          </Link>
          <h3>{beer.tagline}</h3>
          <h2>{beer.description}</h2>
        </div>
      ))}
    </div>
  );
}
