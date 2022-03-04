import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, navigate, useNavigate } from "react-router-dom";
import Header from "../component/Header";

export default function NewBeer(){
    const [formData, setFormData] = useState({
        name: "Loading data...",
        tagline: "",
        description: "",
        firstBrewed: "",
        brewerTips: "",
        attenuation: 0,
        contributedby: ""
    })
    const params = useParams(); // same as req.params.apartmentId
    const navigate = useNavigate();
  
  
    function handleSubmit(event){
        event.preventDefault()
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`,
        formData
        ).then((newData) => navigate (`/beers`))
        .catch((error)=> navigate(`/beers/create`));
    }
  
    function handleChange(event){
      // event.preventDefault()
      const inputName = event.target.name
      const value = event.target.value
      setFormData(formData=>{
          return {...formData, [inputName]: value}});
    }
  
   
    return (
      <div className="AddBeer">
      <Header />
      <h3>Add New Beer</h3>
  
      <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" 
          name="name" 
          onChange = {handleChange}
          placeholder="Name" />
  
          <label>Tagline</label>
          <input type="text" 
          name="tagline" 
          onChange={handleChange}
          placeholder="Tagline" />

          <label>Description</label>
          <input type="text" 
          name="description" 
          onChange={handleChange}
          placeholder="description" />

          <label>First Brewed</label>
          <input type="text" 
          name="fistbrewed" 
          onChange={handleChange}
          placeholder="fistbrewed" />

          <label>Brewer Tips</label>
          <input type="text" 
          name="tips" 
          onChange={handleChange}
          placeholder="Tips" />

          <label>Attenuation Level</label>
          <input type="number" 
          name="attenuation" 
          onChange={handleChange}
          placeholder="attenuation" />

          <label>Created by </label>
          <input type="text" 
          name="contributed_by" 
          onChange={handleChange}
          placeholder="Contributed by" />
  
          <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}