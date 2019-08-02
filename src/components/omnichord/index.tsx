import React from "react"
import MasterControl from "../master-control"
import ModeControl from "../mode-control"
import RhythmControl from "../rhythm-control"
import ChordControl from "../chord-control"

const ctx: AudioContext = new (AudioContext ||
  (window as any).webkitAudioContext)()
export const OmniContext = React.createContext(ctx)

const Omnichord = () => {
  return (
    <>
      <OmniContext.Provider value={ctx}>
        <ModeControl />
        <RhythmControl />
        <ChordControl />
        <MasterControl />
      </OmniContext.Provider>
    </>
  )
}

export default Omnichord
