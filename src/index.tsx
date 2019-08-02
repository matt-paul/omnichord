import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"

import store from "./store"
import Nav from "./containers/nav"
import AuthorisedRoute from "./components/authorised-route"

import Omnichord from "./components/omnichord"

const Login = () => (
  <div>
    <h1>Please log in</h1>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <AuthorisedRoute exact path="/" component={Omnichord} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
