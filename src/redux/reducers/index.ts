import { combineReducers, Reducer } from "redux"

import beatsReducer from "./beats"

export interface Action<Type, Payload = {}> {
  type: Type
  payload?: Payload
}

const appReducer: Reducer = combineReducers({
  beats: beatsReducer,
})

export default appReducer

export type AppState = ReturnType<typeof appReducer>
