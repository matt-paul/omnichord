import React from "react"
import MasterControl from "./components/master-control"
import ModeControl from "./components/mode-control"
import RhythmControl from "./components/rhythm-control"
import ChordControl from "./components/chord-control"

const ctx = new AudioContext()
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
