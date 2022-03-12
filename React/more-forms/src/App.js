import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h1 className="mt-3 mb-3">Register</h1>
      <UserForm />
      
    </div>
  );
}

export default App;
