import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Multiple from './views/Multiple';
import WordNum from './views/WordNum';

function App() {
  return (
    <div className="App">
      <Link className='btn btn-info mt-3 m-3' to="/">Home</Link>
      <Link className='btn btn-info mt-3 m-3' to="/word">Word</Link>
      <Link className='btn btn-info mt-3 m-3' to="/7">Number</Link>
      <Link className='btn btn-info mt-3 m-3' to="/word/white/violet">multiple inputs</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:wordnum">
          <WordNum />
        </Route>

        <Route exact path="/:word/:wordColor/:bgColor">
          <Multiple />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
