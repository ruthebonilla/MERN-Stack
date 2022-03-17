import React, { useState } from 'react';

const Pokemon = (props) =>{
    const [pokeName, setPokeName] = useState ([]);

    const fetchInfo = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((res) => {
        // console.log(res.data);
        // console.log(res.data.results);
        setPokeName(res.results);
        })
        .catch((err)=> console.log(err));
    }

    return(
        <div>
            <button onClick={fetchInfo} className='btn btn-primary mb-4'>Fetch Pokemon</button>
            <ul>
                {pokeName.map((item, i) => {
                    return <li className='text-start m-1' key={i}>{item.name}</li>;
                    })}
            </ul>
        </div>
    )
}



export default Pokemon;