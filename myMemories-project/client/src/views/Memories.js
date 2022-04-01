import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Memories = (props) =>{
    const [memories, setMemories] = useState([]);

    ///////
    useEffect(()=>{
        axios.get("http://localhost:8000/api/memories")
            .then(res=>{
                // console.log(res);
                setMemories(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[])
    ///////
    const onDeleteHandler = (_id, arrIndex) =>{
        if(window.confirm("are you sure you want to delete this memory?")){
            axios.delete(`http://localhost:8000/api/memories/delete/${_id}`)
                .then(res=>{
                    // console.log(res);
                    const copyState = [...memories];
                    copyState.splice(arrIndex,1);
                    setMemories(copyState);
                })
                .catch(err=>console.log(err.response))
        }
        //console.log("deleting" + arrIndex);
    }
    ///////
    return(
        <div className="w-75 mx-auto">
            <h3>List of Memories <Link className="btn btn-outline-info btn-lg m-3" to="/myMemories/create">add a new memory</Link></h3>
                
            <p >
                {
                    memories.map((item, i)=>{
                        return <div className='box' key={i}><img className="imgSmall" src={item.image}/>{item.title}
                        
                        <br />
                        <Link to={`/myMemories/${item._id}`}><button className="btn btn-outline-dark btn-sm">view this memory</button></Link><Link to={`/myMemories/update/${item._id}`}><button className="btn btn-outline-dark btn-sm">edit</button></Link> <button onClick={()=>onDeleteHandler(item._id,i)} className="btn btn-outline-dark btn-sm">delete</button>
                        </div>
                    })
                }
            </p>
        </div>
    )
}

export default Memories;


