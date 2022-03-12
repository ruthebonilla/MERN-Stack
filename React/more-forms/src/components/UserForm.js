import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    // const [firstNameError, setfirstNameError] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = {firstName, lastName, email, password};
    //     console.log("Welcome", newUser);
    // };

    return(
        <div>
        <form>
            <div className='mb-4'>
                <label>First Name:</label>
                <input type="text" onChange={ (e) => setfirstName(e.target.value )} />  
                {/* {firstName.length >3 || firstName.length ==0 ?"" :"first name must more than 3 characters"} */}
            </div>

            <div className='mb-4'>
                <label>Last Name:</label>
                <input type="text" onChange={ (e) => setlastName(e.target.value )} />    
            </div>
            
            <div className='mb-4'>
                <label>Email Address: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value )} />    
            </div>
            
            <div className='mb-4'>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value )} />    
            </div>

            <div className='mb-4'>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmPass(e.target.value )} />    
            </div>
            
        </form>
        <h2 className="mt-5">Your Form Data</h2>
        <p>Full Name: {firstName} {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirmed Password: {confirmPass}</p>
        </div>
    );
};

export default UserForm;
