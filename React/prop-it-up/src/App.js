import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

// for cleaner code---------------------------------------
// var peopleArr =[
//   {"firstName":"Ruth", "lastName":"Bonilla", "age":20, "hairColor":"brown"},
//   {"firstName":"Jerry", "lastName":"Tom", "age":75, "hairColor":"brown"},
//   {"firstName":"John", "lastName":"Smith", "age":38, "hairColor":"blond"},
//   {"firstName":"Maria", "lastName":"Smith", "age":35, "hairColor":"black"}
// ]
// -------------------------------------------------------

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Ruth"} lastName={"Bonilla"} age={"20"} hairColor={"brown"}/>
      <PersonCard firstName={"Jerry"} lastName={"Tom"} age={"75"} hairColor={"blond"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={"38"} hairColor={"blond"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={"35"} hairColor={"black"}/>
      
      
      {/* {peopleArr.map(person =>{
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })} */}
    </div>
  );
}

export default App;
