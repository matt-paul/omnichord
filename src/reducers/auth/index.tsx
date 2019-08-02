import { Action } from "../../reducers"

// Actions
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const AUTHENTICATION_REQUEST = "AUTHENTICATION_REQUEST"
const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS"
const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR"

// export type LoginAction = Action<"LOGIN">
// export type LogoutAction = Action<"LOGOUT">

export type Actions = Action<"LOGIN"> | Action<"LOGOUT">

// Action creators
export function login(): Action<"LOGIN"> {
  return { type: LOGIN }
}

export function logout(): Action<"LOGOUT"> {
  return { type: LOGOUT }
}

// export type LoginActionCreator = () => LoginAction
// export type LogoutActionCreator = () => LogoutAction

// Reducer
interface IAuthState {
  isAuthenticated: boolean
}

export const defaultState = {
  isAuthenticated: false,
}

function authReducer(state: IAuthState = defaultState, action: Actions) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { isAuthenticated: true })
    case LOGOUT:
      return Object.assign({}, state, { isAuthenticated: false })
  }
  return state
}

export default authReducer
