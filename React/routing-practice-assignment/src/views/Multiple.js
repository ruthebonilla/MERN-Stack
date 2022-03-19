import React from 'react';
import { useParams } from 'react-router-dom';

const Multiple = (props) =>{
    const {word, wordColor, bgColor} = useParams();

    return(
        <div style={{color: wordColor, backgroundColor: bgColor, padding:"20px"}}>
            <h1>The word is: {word}</h1>
        </div>
    )
}



export default Multiple;