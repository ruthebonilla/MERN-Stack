import React from 'react'; 
import { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const Form = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        title: "",
        image: "",
        date: null,
        description: "",
        tags: "",
        likeCount: 0
    })
    const [error, setError] = useState({});
    ///////
    // const image_input = document.querySelector("#image_input");
    // var uploaded_image = "";
    // image_input.addEventListener("change", function(){
    //     const reader = new FileReader();
    //     reader.addEventListener("load", ()=> {
    //         uploaded_image = reader.result;
    //         document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
    //     });
    //     reader.readAsDataURL(this.files[0]);
    // })
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
        //console.log("submitted");
        axios.post("http://localhost:8000/api/memories/create", form)
            .then(res=>{
                // console.log(res);
                history.push("/myMemories/platform");
            })
            .catch(err=>{
                // console.log(err.response);
                setError(err.response.data.err.errors);
            })
        }
        ///////
        return(
            <div>
            <h3 className='mb-3'>Add A New Memory! <Link className="btn btn-outline-info m-3" to={`/myMemories/platform`}>Main Page</Link></h3>
            
            
            <form className="w-50 mx-auto border border-2 mb-3" onSubmit={onSubmitHandler}>
                <div className="form-group m-3">
                    <label htmlFor="title">Title</label>
                    <input onChange={onChangeHandler} type="text" name="title" className="form-control" placeholder="visiting Spain"/>
                    <span className="alert-danger">{error.title && error.title.message}</span>
                </div>

                <div className="form-group m-3">
                    <label htmlFor="image">Image</label>
                    <input onChange={onChangeHandler} type="file" name="image" className="form-control" id="image_input"/>
                    <span className="alert-danger">{error.image && error.image.message}</span>
                </div>

                
                <div className="form-group m-4">
                    <label htmlFor="image">or grab an ImageUrl from google</label>
                    <input onChange={onChangeHandler} type="text" name="image" className="form-control"/>
                    {/* <span className="alert-danger">{error.image && error.image.message}</span> */}
                </div>

                <div className="form-group m-3">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={onChangeHandler} type="text" name="description" className="form-control" rows="4" placeholder="Went to Spain last month, for the first time with my family. Ate some amazing food, shopped till I dropped and explored some amazing cities!"/>
                    <span className="alert-danger">{error.description && error.description.message}</span>
                </div>

                <div className="form-group m-3">
                    <label htmlFor="date">Date</label>
                    <input onChange={onChangeHandler} type="date" name="date" className="form-control" />
                    <span className="alert-danger">{error.date && error.date.message}</span>
                </div>

                <div className="form-group m-3">
                    <label htmlFor="tags">Tags</label>
                    <input onChange={onChangeHandler} type="text" name="tags" className="form-control" placeholder="ex:   #travel #europeanfood #shopping"/>
                    <span className="alert-danger">{error.tags && error.tags.message}</span>
                </div>

                <input type="submit" className="btn btn-outline-success mt-4" />
            </form>
        </div>
    )
}


export default Form;