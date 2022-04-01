import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const Single = (props) => {
    const [memories, setMemories] = useState({});
    const {_id} = useParams();
    const history = useHistory();
    ///////
    useEffect(()=>{
        axios.get("http://localhost:8000/api/memories/" + _id)
            .then(res=>{
                //console.log(res);
                setMemories(res.data.results);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[_id])
    ///////
    const onDeleteHandler = () => {
        if(window.confirm("confirm delete?")){
            axios.delete(`http://localhost:8000/api/memories/delete/${_id}`)
                .then(res=>{
                // console.log(res);
                history.push("/myMemories/platform");
                })
                .catch(err=>console.log(err.response))
        }
    }
    ///////
    return(
        <div>
            <h2 className='mb-5'>{memories.title}</h2>
            <h3>Date of activity: {memories.date}</h3>
            <img className='imgSingle' src={memories.image} />
            <h5 className='tags'>{memories.tags}</h5>
            <h2>"{memories.description}"</h2>

            <Link className="btn btn-info m-3" to={`/myMemories/platform`}>Main Page</Link>
            <button onClick={onDeleteHandler} className='btn btn-danger m-3'>Delete Memory</button>
        </div>
    )
}


export default Single;