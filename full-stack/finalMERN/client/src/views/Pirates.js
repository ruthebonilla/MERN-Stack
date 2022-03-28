import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Pirates = (props) =>{
    const [pirates, setPirates] = useState([]);

    ///////
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
            .then(res=>{
                // console.log(res);
                setPirates(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[])
    ///////
    const onDeleteHandler = (_id, arrIndex) =>{
        if(window.confirm("confirm delete?")){
            axios.delete(`http://localhost:8000/api/pirates/delete/${_id}`)
                .then(res=>{
                    // console.log(res);
                    const copyState = [...pirates];
                    copyState.splice(arrIndex,1);
                    setPirates(copyState);
                })
                .catch(err=>console.log(err.response))
        }
        //console.log("deleting" + arrIndex);
    }
    ///////
    return(
        <div className="w-75 mx-auto">
            <h3>List of Pirates <Link className="btn btn-outline-info btn-lg m-3" to="/pirates/create">Add Pirate</Link></h3>
                
            <p >
                {
                    pirates.map((item, i)=>{
                        return <div className='box' key={i}><img className="imgSmall" src={item.imageUrl}/>{item.name}
                        <br />
                        <Link to={`/pirates/${item._id}`}><button className="btn btn-outline-dark btn-sm">view pirate</button></Link> <button onClick={()=>onDeleteHandler(item._id,i)} className="btn btn-outline-dark btn-sm">walk the plank!</button>
                        </div>
                    })
                }
            </p>
        </div>
    )
}

export default Pirates;