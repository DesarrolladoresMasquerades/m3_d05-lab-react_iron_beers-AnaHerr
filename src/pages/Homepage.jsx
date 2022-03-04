import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "axios";
import beers from "../assets/beers.png"
import NuBeer from "../assets/new-beer.png"
import RandomB from "../assets/random-beer.png"

export default function Homepage(){

    const [beersData, setBeersData] = useState([])

    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response=>setBeersData(response.data))
    
      }, []);

    return(
            <div>

            <div>
            <img src={beers} alt=""/>
                <Link to={`/beers`}>
                <h3>All beers</h3>
                </Link>
            </div>

            <div>
            <img src={RandomB} alt=""/>
                <Link to={`/randombeer`}>  
                <h3>Random Beer</h3>
                </Link>
            </div>
 
            <div>
            <img src={NuBeer} alt=""/>
                <Link to={`/beers/create`}>
                 <h3>New Beer</h3>
                </Link>
            </div>
              
            </div>
    )
    
}