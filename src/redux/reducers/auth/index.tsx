import { Action } from "../../reducers"

// Actions
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

export type LoginAction = Action<"LOGIN">
export type LogoutAction = Action<"LOGOUT">

export type Actions = LoginAction | LogoutAction

// Action creators
export const login = (): LoginAction => ({ type: LOGIN })
export const logout = (): LogoutAction => ({ type: LOGOUT })

export type LoginActionCreator = () => LoginAction
export type LogoutActionCreator = () => LogoutAction

// Reducer
interface IAuthState {
  isAuthenticated: boolean
}

export const defaultState = {
  isAuthenticated: false,
}
const authReducer = (state: IAuthState = defaultState, action: Actions) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { isAuthenticated: true })
    case LOGOUT:
      return Object.assign({}, state, { isAuthenticated: false })
  }
  return state
}

export default authReducer
