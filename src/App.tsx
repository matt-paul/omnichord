import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import "./App.css"
import store from "./redux/store"

import Omnichord from "./Omnichord"

const App = () => (
  <ReduxProvider store={store}>
    <Omnichord />
  </ReduxProvider>
)

export default App
