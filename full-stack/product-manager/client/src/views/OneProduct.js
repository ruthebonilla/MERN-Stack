import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const OneProduct = (props) => {
    const [product, setProduct] = useState({});
    const {_id} = useParams();
    const history = useHistory();
    ///////
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res=>{
                //console.log(res);
                setProduct(res.data.results);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[_id])
    ///////
    const onDeleteHandler = () => {
        if(window.confirm("confirm delete?")){
            axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
                .then(res=>{
                // console.log(res);
                history.push("/");
                })
                .catch(err=>console.log(err.response))
        }
    }
    ///////
    return(
        <div className="single">
            <h3>Product: {product.product}</h3>
            <h4>Description: {product.description}</h4>
            <h4>Price: ${product.price}</h4>

            <Link className="btn btn-success m-3" to={`/products/update/${_id}`}>Edit Product</Link>
            <Link className="btn btn-info m-3" to={`/`}>Main Page</Link>
            <button onClick={onDeleteHandler} className='btn btn-danger m-3'>Delete Product</button>
        </div>
    )
}


export default OneProduct;