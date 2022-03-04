import Header from "../component/Header"
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function RandomBeer(){
 
    const [beer, setBeerData] = useState({});
    const params = useParams(); 

    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response=>setBeerData(response.data))
    
      }, []);


    return (
      <div>
        <Header />
        <h3>Random Beer</h3>

        <div key={beer._id} className="card">
            <img src={beer.image_url} alt="beerImg" />
            <h3>{beer.name}</h3>
            <h3>{beer.tagline}</h3>
            <h3>{beer.attenuation_level}</h3>
            <h3>{beer.first_brewed}</h3>
            <h3>{beer.description}</h3>
            <h2>Created by:{beer.contributed_by}</h2>
    
        </div>
      </div>
     )
 
    };