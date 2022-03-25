import { useEffect, useState  } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    
    ///////
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                // console.log(res);
                setProducts(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[])
    ///////
    const onDeleteHandler = (_id, arrIndex) =>{
        if(window.confirm("confirm delete?")){
            axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
                .then(res=>{
                    // console.log(res);
                    const copyState = [...products];
                    copyState.splice(arrIndex,1);
                    setProducts(copyState);
                })
                .catch(err=>console.log(err.response))
        }
        //console.log("deleting" + arrIndex);
    }
    ///////
    return(
        <div>
            <Link className="btn btn-outline-dark" to="/products/create">Create new product</Link>
            <ul>
                {
                    products.map((item, i)=>{
                        return <li key={i}><Link to={`/products/${item._id}`}>{item.product}</Link>
                        <br />
                        <Link to={`/products/update/${item._id}`}><button type="button" className="btn btn-outline-dark">Edit</button></Link> <button onClick={()=>onDeleteHandler(item._id,i)} type="button" className="btn btn-outline-danger">Delete</button></li>
                    })
                }
            </ul>
        </div>
    )
}


export default Main;