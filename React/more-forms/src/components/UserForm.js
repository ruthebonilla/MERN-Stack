import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", newUser);
    };

    return(
        <form onSubmit={ createUser }>
            <div className='mb-4'>
                <label>First Name:</label>
                <input type="text" onChange={ (e) => setfirstName(e.target.value )} />    
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
            
            <input className='btn btn-info' type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;
