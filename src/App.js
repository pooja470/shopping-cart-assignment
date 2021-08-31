import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import AuthContext from "./AuthContext";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Login from "./container/Auth/Login";
import Signup from "./container/Auth/Signup";
import Home from "./container/Home/home";
import store from "./redux/store";
import "./App.scss";
const Products = lazy(() => import("./container/Products/Products"));
const Cart = lazy(() => import("./container/Cart/Cart"));

function App(){
  const [userAuthentication, setUserAuthentication] = useState(
    sessionStorage.getItem("status")
  );
  const contextVal = {
    userAuthentication,
    toggleUserAuthentication: () => {
      setUserAuthentication(
        userAuthentication === "logged-in" ? "" : "logged-in"
      );
    },
  };
    return(
             <Provider store={store}>
            <AuthContext.Provider value={contextVal}>
            <BrowserRouter>
            <Header />
          <main>
             <Suspense fallback={<small>Loading products...</small>}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sign-up" component={Signup} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
              </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
        </AuthContext.Provider>
        </Provider>
    )
}

export default App;