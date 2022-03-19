import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import People from './views/People';
import Planets from './views/Planets';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
  const [word, setWord] = useState("people");
  const [id, setId] = useState();

  const history = useHistory();

  const onSubmitHandler = (event) =>{
        event.preventDefault();
        history.push(`/${word}/${id}`);
  }


  return (
    <div className="App">
      <h1 className='mt-3 mb-4'>Luke Api Walker</h1>
      <form onSubmit={onSubmitHandler}>
                <label>Search For:</label>
                <select onChange={(event)=>setWord(event.target.value)} className="form-select w-25 d-inline-block m-2">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <br />
                <label>ID:</label>
                <input onChange={(event)=>setId(event.target.value)} type="number" className="form-control w-25 d-inline-block m-2" />
                <input type="submit" className="btn btn-info" />
            </form>
      <Switch>
        <Route exact path="/people/:id">
          <People />
        </Route>

        <Route exact path="/planets/:id">
          <Planets />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
