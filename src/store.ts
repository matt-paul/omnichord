import { createStore } from "redux"

import rootReducer, { AppState } from "./reducers"

export const defaultState = {}

const w: any = window as any

const isDev: boolean = process.env.NODE_ENV === "development"

const devTools =
  isDev && w.__REDUX_DEVTOOLS_EXTENSION__
    ? w.__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f

const configureStore = (initialState: AppState | any = defaultState) =>
  createStore(rootReducer, initialState, devTools)

export default configureStore()
