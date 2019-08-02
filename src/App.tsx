import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import store from "./redux/store"
import Nav from "./components/nav"
import AuthorisedRoute from "./components/authorised-route"

import Omnichord from "./Omnichord"

const Login = () => (
  <div>
    <h1>Please log in</h1>
  </div>
)

const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <Nav />
      <AuthorisedRoute exact path="/" component={Omnichord} />
      <Route path="/login" component={Login} />
    </Router>
  </ReduxProvider>
)

export default App
