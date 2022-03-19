import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const People = (props) =>{
    const [character, setCharacter] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res)
                setCharacter(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])


    return(
        <div style={{border:"2px solid black", width:"500px", margin:"auto"}}>
            <h1>{character.name}</h1>
            <p><strong> Height: </strong> {character.height}</p>
            <p><strong> Mass: </strong> {character.mass}</p>
            <p><strong> Hair Color: </strong> {character.hair_color}</p>
            <p><strong> Skin Color: </strong> {character.skin_color}</p>
        </div>
    )
}


export default People;