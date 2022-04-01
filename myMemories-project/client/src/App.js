import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import LogReg from "./views/LogReg";
import Memories from "./views/Memories";
import Form from "./views/Form";
import Single from "./views/Single";
import Update from "./views/Update";


function App() {
  return (
    <div className="App">
      <h1>myMemories</h1>
      <Switch>
        <Route exact path="/">
          <LogReg />
        </Route>

        <Route exact path="/myMemories/platform">
          <Memories />
        </Route>

        <Route exact path="/myMemories/create">
          <Form />
        </Route>

        <Route exact path="/myMemories/:_id">
          <Single />
        </Route>

        <Route exact path="/myMemories/update/:_id">
          <Update />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
