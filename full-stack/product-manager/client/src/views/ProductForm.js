import React from 'react'; 
import { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const ProductForm = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        product: "",
        price: null,
        description: ""
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
        axios.post("http://localhost:8000/api/products/create", form)
            .then(res=>{
                // console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err.response);
            })
    }
    ///////
    return(
        <div>
            <h3 className='mt-5 mb-3'>Create Some Awesome Products!</h3>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group m-3">
                    <label htmlFor="product">Product</label>
                    <input onChange={onChangeHandler} type="text" name="product" className="form-control" />
                </div>

                <div className="form-group m-3">
                    <label htmlFor="price">Price</label>
                    <input onChange={onChangeHandler} type="number" name="price" className="form-control" />
                </div>

                <div className="form-group m-3">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={onChangeHandler} type="text" name="description" className="form-control row-4" />
                </div>
                <input type="submit" className="btn btn-outline-success mt-4" />
            </form>
                <Link className="btn btn-outline-info m-3" to={`/`}>Main Page</Link>
        </div>
    )
}


export default ProductForm;