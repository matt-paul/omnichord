import { combineReducers, Reducer } from "redux"

import authReducer from "./auth"

export interface Action<Type, Payload = {}> {
  type: Type
  payload?: Payload
}

const appReducer: Reducer = combineReducers({
  auth: authReducer,
})

export default appReducer

export type AppState = ReturnType<typeof appReducer>
