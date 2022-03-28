import React from 'react'; 
import { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const Form = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({
        name: "",
        imageUrl: "",
        chests: null,
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    })
    const [error, setError] = useState({});
    ///////
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }
    ///////
    const onSubmitHandler = (event) => {
        event.preventDefault();
        //console.log("submitted");
        axios.post("http://localhost:8000/api/pirates/create", form)
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
            <h3 className='mb-3'>Add A Pirate to the Crew! <Link className="btn btn-outline-info m-3" to={`/`}>Main Page</Link></h3>
            
            
            <form className="w-50 mx-auto border border-2 mb-3" onSubmit={onSubmitHandler}>
                <div className="form-group m-3">
                    <label htmlFor="name">Name</label>
                    <input onChange={onChangeHandler} type="text" name="name" className="form-control" />
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <div className="form-group m-3">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input onChange={onChangeHandler} type="text" name="imageUrl" className="form-control" />
                    <span className="alert-danger">{error.imageUrl && error.imageUrl.message}</span>
                </div>

                <div className="form-group m-3">
                    <label htmlFor="catchPhrase">Catch Phrase</label>
                    <textarea onChange={onChangeHandler} type="text" name="catchPhrase" className="form-control row-4" />
                    <span className="alert-danger">{error.catchPhrase && error.catchPhrase.message}</span>
                </div>

                <div className="form-group m-3 w-25 mx-auto">
                    <label htmlFor="chests">Number of Treasure Chests</label>
                    <input onChange={onChangeHandler} type="number" name="chests" className="form-control" />
                    <span className="alert-danger">{error.chests && error.chests.message}</span>
                </div>

                <div className="form-group m-3 mx-auto w-50">
                    <label htmlFor="crewPosition">Pirates Position</label>
                    <select onChange={onChangeHandler} type="text" name="crewPosition" className="form-select" >
                            <option placeholder='choose a position'>Choose a postion</option>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="Boatswain">BoatSwain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    <span className="alert-danger">{error.crewPosition && error.crewPosition.message}</span>
                </div>

                <div className="form-check m-3">
                    <input onChange={onChangeHandler} type="checkbox" name="pegLeg" className="form-check-label" checked={form.pegLeg}/>
                    <label htmlFor="pegLeg">Peg Leg</label>
                </div>

                <div className="form-check m-3">
                    <input onChange={onChangeHandler} type="checkbox"  name="eyePatch" className="form-check-label" checked={form.eyePatch}/>
                    <label htmlFor="eyePatch">Eye Patch</label>
                </div>

                <div className="form-check m-3">
                    <input onChange={onChangeHandler} type="checkbox"  name="hookHand" className="form-check-label" checked={form.hookHand}/>
                    <label htmlFor="hookHand">Hook Hand</label>
                </div>


                <input type="submit" className="btn btn-outline-success mt-4" />
            </form>
        </div>
    )
}


export default Form;