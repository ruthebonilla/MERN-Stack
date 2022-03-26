import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Authors = (props) =>{
    const [authors, setAuthors] = useState([]);

    ///////
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                // console.log(res);
                setAuthors(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[])
    ///////
    const onDeleteHandler = (_id, arrIndex) =>{
        if(window.confirm("confirm delete?")){
            axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
                .then(res=>{
                    // console.log(res);
                    const copyState = [...authors];
                    copyState.splice(arrIndex,1);
                    setAuthors(copyState);
                })
                .catch(err=>console.log(err.response))
        }
        //console.log("deleting" + arrIndex);
    }
    ///////
    return(
        <div className="w-75 mx-auto">
            <h3>List of Authors</h3>
            <table className="table table-info table-striped table-hover">
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((item, i)=>{
                            return <tr key={i}>
                                <td>{item.author}</td>
                                <td><Link to={`/authors/update/${item._id}`}><button className="btn btn-outline-dark btn-sm">edit</button></Link> <button onClick={()=>onDeleteHandler(item._id,i)} className="btn btn-outline-dark btn-sm">delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        <Link className="btn btn-outline-info btn-lg m-3" to="/authors/create">Add Author</Link>
        </div>
    )
}

export default Authors;