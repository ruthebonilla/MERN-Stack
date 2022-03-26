import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import Authors from "./views/Authors";
import Form from "./views/Form";
import Update from "./views/Update";


function App() {
  return (
    <div className="App">
      <h1 className="mt-3 mb-5">Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Authors />
        </Route>

        <Route exact path="/authors/create">
          <Form />
        </Route>

        <Route exact path="/authors/update/:_id">
          <Update />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
