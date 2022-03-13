import React, { useState } from 'react';
import "./UserForm.css" 

const UserForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const lengthValidator = (input, num) => {
        return input.length >= num;
    }

    return(
        <div className="forms">
        <form className="border">
        <h2 className=" mb-3">Register</h2>
            <div className="mb-3 form-group">
                <label className="form-label">First Name:</label>
                <input name="firstName" type="text" className="form-control" onChange={onChangeHandler} />  
                {lengthValidator(form.firstName, 3) || form.firstName.length ===0 ? "" : <span className="alert-info">you need at least 3 characters in this field</span>}
            </div>

            <div className="mb-3 form-group">
                <label className="form-label">Last Name:</label>
                <input name="lastName" type="text" className="form-control" onChange={onChangeHandler} /> 
                {lengthValidator(form.lastName, 3) || form.lastName.length ===0 ? "" : <span className="alert-info">you need at least 3 characters in this field</span>}
            </div>
            
            <div className="mb-3 form-group">
                <label className="form-label">Email Address: </label>
                <input name="email" type="text" className="form-control" onChange={onChangeHandler} /> 
                {lengthValidator(form.email, 5) || form.email.length ===0 ? "" : <span className="alert-info">you need at least 5 characters in this field</span>}
            </div>
            
            <div className="mb-3 form-group">
                <label className="form-label">Password: </label>
                <input name="password" type="text" className="form-control" onChange={onChangeHandler} /> 
                {lengthValidator(form.password, 8) || form.password.length ===0 ? "" : <span className="alert-info">you need at least 8 characters in this field</span>}
            </div>

            <div className="mb-3 form-group">
                <label className="form-label">Confirm Password: </label>
                <input name="confirmPassword" type="text" className="form-control" onChange={onChangeHandler} /> 
                {(form.confirmPassword === form.password) || form.confirmPassword.length ===0 ? "" :<span className="alert-info">password does not match</span>}
            </div>
            
        </form>
        <div className="border">
        <h2 className="mt-3">Your Form Data</h2>
        <br />
        <p><span>Full Name:</span> {form.firstName} {form.lastName}</p>
        <p><span>Email:</span> {form.email}</p>
        <p><span>Password:</span> {form.password}</p>
        <p><span>Confirmed Password:</span> {form.confirmPassword}</p>
        </div>
        </div>
    )
}

export default UserForm;
