import React from 'react';
import { useParams } from 'react-router-dom';

const Repeater = (props) =>{
    const {word, other} = useParams();

    return (
        <div>
            {/* {
                !isNaN(other) && <h1>you put a number in here!{parseInt(other) + 1}</h1>
            } */}
            <h1>{word}</h1>
            <h1>{word}</h1>
            <h1>{word}</h1>
            <h1>{word}</h1>
            <h1>{word}</h1>
            <h1>{word}</h1>
            <h1>{word}</h1>
            {/* <h1>{other}</h1>
            <h1>{other}</h1>
            <h1>{other}</h1>
            <h1>{other}</h1>
            <h1>{other}</h1> */}
        </div>
    )
}



export default Repeater;