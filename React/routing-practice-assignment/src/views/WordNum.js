import React from 'react';
import { useParams } from 'react-router-dom';

const WordNum = (props) =>{
    const {wordnum} = useParams();

    return(
        <div>
            <h1 className='mt-5'>{(isNaN(wordnum)? "The word is: "  + wordnum : "The number is: " + wordnum)}</h1>
        </div>
    )
}


export default WordNum;