import { createStore } from "redux"

import rootReducer, { AppState } from "./reducers"

export const defaultState = {
  // beats: {
  //   activeBeat: "rockOne",
  //   beats: [{ name: "rockOne", src: "/path" }],
  // },
}

const w: any = window as any

const isDev: boolean = process.env.NODE_ENV === "development"

const devTools =
  isDev && w.devToolsExtension ? w.devToolsExtension() : (f: any) => f

const configureStore = (initialState: AppState | any = defaultState) =>
  createStore(rootReducer, initialState, devTools)

export default configureStore()
