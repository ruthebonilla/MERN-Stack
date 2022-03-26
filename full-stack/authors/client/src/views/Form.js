import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link} from 'react-router-dom';

const Form = (props) =>{
    const history = useHistory("")
    const [error, setError] = useState({});
    const [form, setForm] = useState({
        author: ""
    })
    ///////
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    ///////
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res=>{
                // console.log(res);
                history.push("/");
            })
            .catch(err=>{
                // console.log(err.response);
                setError(err.response.data.err.errors);
            })
    }
    ///////
    return(
        <div>
            <h3>Add To Your Favorite Author List!</h3>
            <div className="box">
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group m-3">
                    <label htmlFor="author">Name of Author:</label>
                    <input onChange={onChangeHandler} type="text" name="author" className="form-control" />
                    <span className="alert-danger">{error.author && error.author.message}</span>
                </div>

                <input type="submit" className="btn btn-outline-success mt-4" />
            </form>
            <Link className="btn btn-outline-info m-3" to={`/`}>Main Page</Link>
            </div>
        </div>
    )
}

export default Form;