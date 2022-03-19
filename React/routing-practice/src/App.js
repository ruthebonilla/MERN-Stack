import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import  { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './views/Home';
import Second from './views/Second';
import Repeater from './views/Repeater';
import Pokemon from './views/Pokemon';


function App() {
  const [category, setCategory] = useState("pokemon");
  const [detail, setDetail] = useState("");

  const history = useHistory();

  const onSubmitHandler=(event) =>{
    event.preventDefault();
    // console.log("form submitted");
    history.push(`/${category}/${detail}`);
  }


  return (
    <div className="App">
      <div className='navBar'>
        <Link to="/repeat/hey/7" className="btn btn-primary mt-3 mb-3">test route</Link>
        <form onSubmit={onSubmitHandler}>
          <select onChange={(event)=>setCategory(event.target.value)} className="form-select w-25 d-inline-block">
            <option>pokemon</option>
            <option>repeat</option>
          </select>
          <input onChange={(event)=>setDetail(event.target.value)} type="text" className="form-control w-25 d-inline-block" />
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
      <h1><marquee scrollamount="10">Routing Practice</marquee></h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/second">
          <Second />
        </Route>

        <Route exact path="/repeat/:word">
          <Repeater />
        </Route>

        <Route exact path="/pokemon/:name">
          <Pokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
