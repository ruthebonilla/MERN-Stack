import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const Single = (props) => {
    const [pirate, setPirate] = useState({});
    const {_id} = useParams();
    const history = useHistory();
    ///////
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/" + _id)
            .then(res=>{
                //console.log(res);
                setPirate(res.data.results);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[_id])
    ///////
    const onDeleteHandler = () => {
        if(window.confirm("confirm delete?")){
            axios.delete(`http://localhost:8000/api/pirates/delete/${_id}`)
                .then(res=>{
                // console.log(res);
                history.push("/");
                })
                .catch(err=>console.log(err.response))
        }
    }
    ///////
    return(
        <div>
            <h2 className='mb-5'>{pirate.name}</h2>
            <div className="single">
            <div className='leftSide'>
                <h4><img className='imgSingle' src={pirate.imageUrl} /></h4>
                <h2>"{pirate.catchPhrase}"</h2>
            </div>
            <div className='right-side'>
                <h4>Position: {pirate.crewPosition}</h4>
                <h4>Treasures: {pirate.chests}</h4>
                <h4>Peg Leg: {pirate.pegLeg ? "yes" : "no"}</h4>
                <h4>Eye Patch: {pirate.eyePatch ? "yes" : "no"}</h4>
                <h4>Hook Hand: {pirate.hookHand ? "yes" : "no"}</h4>
                
            </div>

        </div>
            <Link className="btn btn-info m-3" to={`/`}>Main Page</Link>
            <button onClick={onDeleteHandler} className='btn btn-danger m-3'>Delete Pirate</button>
        </div>
    )
}


export default Single;