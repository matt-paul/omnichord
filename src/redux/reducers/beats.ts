import { Action } from "./"

export type SwitchBeatAction = Action<"SWITCH_BEAT", { beat: string }>

export type switchBeatActionCreator = (beat: string) => SwitchBeatAction

export type Actions = SwitchBeatAction

export interface Beat {
  src: string
  name: string
}

export type BeatsState = { activeBeat: string; beats: Beat[] }

export const addFavourite = (beat: string): SwitchBeatAction => ({
  type: "SWITCH_BEAT",
  payload: {
    beat,
  },
})

export const defaultState = {
  beats: [{ name: "rockOne", src: "/path" }],
  activeBeat: "rockOne",
}

const beatsReducer = (state: BeatsState = defaultState, action: Actions) => {
  switch (action.type) {
    case "SWITCH_BEAT":
      if (action.payload) {
        return {
          beats: state.beats,
          activeBeat: action.payload.beat,
        }
      }
      break

    default:
      return state
  }
}

export default beatsReducer
