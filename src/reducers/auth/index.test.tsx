import authReducer, { login, logout, defaultState } from "./"

describe("authReducer", () => {
  test("initialises with default state", () => {
    // @ts-ignore
    const state = authReducer(undefined, { type: "" })

    expect(state).toBe(defaultState)
  })
  test("changes state for login action", () => {
    const initialState = defaultState
    const newState = authReducer(initialState, login())
    expect(newState.isAuthenticated).toEqual(true)
  })
  test("changes state for logout action", () => {
    const initialState = defaultState
    const newState = authReducer(initialState, logout())
    expect(newState.isAuthenticated).toEqual(false)
  })
})
