import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Link, useParams } from 'react-router-dom';

const Update = (props) =>{
    const {_id} = useParams();
    const history = useHistory();
    const [update, setUpdate] = useState({
        author: ""
    });
    const [error, setError] = useState({});

    ///////
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log(res);
                setUpdate(res.data.results);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[_id]);
    ///////
    const onChangeHandler = (event) => {
        setUpdate({
            ...update,
            [event.target.name]: event.target.value
        })
    }
    ///////
    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/authors/update/${_id}`, update)
            .then(res=>{
                // console.log(res);
                history.push("/");
            })
            .catch(err=>{ 
                console.log(err.response);
                setError(err.response.data.error.errors);
            })
    }
    ///////
    return(
        <div>
            <h3>Edit This Author</h3>
            <div className="box">
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group m-3">
                    <label htmlFor="author">Name of Author:</label>
                    <input value={update.author} onChange={onChangeHandler} type="text" name="author" className="form-control" />
                    <span className="alert-danger">{error.author && error.author.message}</span>
                </div>

                <input type="submit" className="btn btn-outline-success mt-4" />
            </form>
            <Link className="btn btn-outline-info m-3" to={`/`}>Main Page</Link>
            </div>
        </div>
    )
}

export default Update;