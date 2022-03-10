import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Ruth"} lastName={"Bonilla"} number={20} hairColor={"brown"} />
      <PersonCard firstName={"Jimmy"} lastName={"John"} number={35} hairColor={"blond"} />
    </div>
  );
}

export default App;
