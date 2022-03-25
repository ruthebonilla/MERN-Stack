import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Link, useParams,  } from 'react-router-dom';

const UpdateProduct = (props) => {
    const {_id} = useParams();
    const [update, setUpdate] = useState({});
    const history = useHistory();
    ///////
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                //console.log(res);
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
        // const copyState ={
        //     product: update.product,
        //     price: update.price, 
        //     description: update.description,
        // };
        axios.patch(`http://localhost:8000/api/products/update/${_id}`, update)
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
            <h3 className='mt-5 mb-3'>Update Product</h3>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler} >
                <div className="form-group m-3">
                    <label htmlFor="product">Product</label>
                    <input value={update.product} onChange={onChangeHandler} type="text" name="product" className="form-control" />
                </div>

                <div className="form-group m-3">
                    <label htmlFor="price">Price</label>
                    <input value={update.price} onChange={onChangeHandler} type="number" name="price" className="form-control" />
                </div>

                <div className="form-group m-3">
                    <label htmlFor="description">Description</label>
                    <textarea value={update.description} onChange={onChangeHandler} type="text" name="description" className="form-control row-4" />
                </div>
                <input type="submit" className="btn btn-outline-success mt-4" />
            </form>
                <Link className="btn btn-outline-info m-3" to={`/`}>Main Page</Link>
        </div>
    )
}


export default UpdateProduct;