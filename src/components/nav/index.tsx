import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

import Form from "../form"

interface IProps {
  login: () => void
  logout: () => void
  isAuthenticated: boolean
}
const Nav: FunctionComponent<IProps> = ({ isAuthenticated, login, logout }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <Form />
    {!isAuthenticated && <button onClick={login}>Login</button>}
    {isAuthenticated && <button onClick={logout}>Logout</button>}
  </nav>
)

export default Nav
