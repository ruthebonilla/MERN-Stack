import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) =>{
    const [pokeName, setPokeName] = useState([]);


    const fetchInfo=() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response)=>setPokeName(response.data.results));
    }


    return (
        <div>
            <button onClick={fetchInfo} className='btn btn-outline-info mb-3'>Fetch Pokemon</button>
            <ul>
                {pokeName.map((item, i)=>{
                    return <li className='text-start m-1' key={i}>{item.name}</li>;
                })}
            </ul>
        </div>
    )
}


export default Pokemon;