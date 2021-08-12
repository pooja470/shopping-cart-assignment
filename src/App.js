import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Component/Navbar';
import Login from './container/Login/Login';
import Products from './container/Products/Products';
import Cart from './container/Cart/Cart';
import Signup from './container/Signup/Signup';
import Home from './container/Home/home';

function App(){
   
    return(
        <div>
            <BrowserRouter>
          <main>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sign-up" component={Signup} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
          </main>
        </BrowserRouter>
        </div>
    )
}

export default App;