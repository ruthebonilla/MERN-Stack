import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Link, useParams } from 'react-router-dom';

const Update = (props) =>{
    const {_id} = useParams();
    const history = useHistory();
    const [update, setUpdate] = useState({
        title: "",
        image: "",
        date: null,
        description: "",
        tags: "",
        likeCount: 0
    });
    const [error, setError] = useState({});

    ///////
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/memories/${_id}`)
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

        axios.patch(`http://localhost:8000/api/memories/update/${_id}`, update)
            .then(res=>{
                // console.log(res);
                history.push("/myMemories/platform");
            })
            .catch(err=>{ 
                console.log(err.response);
                setError(err.response.data.error.errors);
            })
    }
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
        <h3 className='mb-3'>Add A New Memory! <Link className="btn btn-outline-info m-3" to={`/myMemories/platform`}>Main Page</Link></h3>
        
        
        <form className="w-50 mx-auto border border-2 mb-3" onSubmit={onSubmitHandler}>
            <div className="form-group m-3">
                <label htmlFor="title">Title</label>
                <input value={update.title} onChange={onChangeHandler} type="text" name="title" className="form-control" />
                <span className="alert-danger">{error.title && error.title.message}</span>
            </div>

            <div className="form-group m-3">
                <label htmlFor="image">Image Url</label>
                <input value={update.image} onChange={onChangeHandler} type="text" name="image" className="form-control" />
                <span className="alert-danger">{error.image && error.image.message}</span>
            </div>

            <div className="form-group m-3">
                <label htmlFor="description">Description</label>
                <textarea value={update.description} onChange={onChangeHandler} type="text" name="description" className="form-control" rows="4" />
                <span className="alert-danger">{error.description && error.description.message}</span>
            </div>

            <div className="form-group m-3">
                <label htmlFor="date">Date</label>
                <input value={update.date} onChange={onChangeHandler} type="date" name="date" className="form-control" />
                <span className="alert-danger">{error.date && error.date.message}</span>
            </div>

            <div className="form-group m-3">
                <label htmlFor="tags">Tags</label>
                <input value={update.tags}  onChange={onChangeHandler} type="text" name="tags" className="form-control" />
                <span className="alert-danger">{error.tags && error.tags.message}</span>
            </div>

            <input type="submit" className="btn btn-outline-success mt-3 mb-2" />
        </form>
            <button onClick={onDeleteHandler} className='btn btn-danger m-3'>Delete Memory</button>
    </div>
)
}

export default Update;