import React from "react"
import MasterControl from "./components/master-control"
import ModeControl from "./components/mode-control"
import RhythmControl from "./components/rhythm-control"
import ChordControl from "./components/chord-control"

const Omnichord = () => {
  // const ctx = new AudioContext()
  // const OmniContext = React.createContext(ctx)
  return (
    <>
      {/* <OmniContext.Provider value={ctx}> */}
      <ModeControl />
      <RhythmControl />
      <ChordControl />
      <MasterControl />
      {/* </OmniContext.Provider> */}
    </>
  )
}

export default Omnichord
