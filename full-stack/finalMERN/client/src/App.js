import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import Pirates from "./views/Pirates";
import Form from "./views/Form";
import Single from "./views/Single";


function App() {
  return (
    <div className="App">
      <h1 className="mt-3 mb-4">The Pirate Crew</h1>
      <Switch>
        <Route exact path="/">
          <Pirates />
        </Route>

        <Route exact path="/pirates/create">
          <Form />
        </Route>

        <Route exact path="/pirates/:_id">
          <Single />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
