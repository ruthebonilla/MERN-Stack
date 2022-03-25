import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import Main from "./views/Main"; /*displays products with buttons, refreshes on spot*/
import ProductForm from "./views/ProductForm"; /*going to have form*/
import OneProduct from "./views/OneProduct"; /*displays one product with buttons, redirect to main page*/
import UpdateProduct from "./views/UpdateProduct"; /*will update product*/

//front end routes (what we see in search bar)
function App() {
    return (
    <div className="App">
        <h1 className='m-4'>Product Manager</h1>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>

            <Route exact path="/products/create">
                <ProductForm />
            </Route>

            <Route exact path="/products/:_id">
                <OneProduct />
            </Route>

            <Route exact path="/products/update/:_id">
                <UpdateProduct />
            </Route>
        </Switch>
    </div>
    );
}

export default App;
