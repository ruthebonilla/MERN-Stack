import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Planets = (props) =>{
    const [planet, setPlanet] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res =>{
            console.log(res)
            setPlanet(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return(
        <div style={{border:"2px solid black", width:"500px", margin:"auto"}}>
            <h1>{planet.name}</h1>
            <p><strong> Climate: </strong> {planet.climate}</p>
            <p><strong> Terrain: </strong> {planet.terrain}</p>
            <p><strong> Surface Water: </strong> {planet.surface_water}</p>
            <p><strong> Population: </strong> {planet.population}</p>
            
        </div>
    )
}


export default Planets;