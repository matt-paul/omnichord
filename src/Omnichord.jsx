import React from "react"
import MasterControl from "./components/master-control"
import ModeControl from "./components/mode-control"
// import RhythmControl from "./components/rhythm-control"
import ChordControl from "./components/chord-control"

const Omnichord = () => (
  <>
    <ModeControl />
    {/* <RhythmControl /> */}
    <ChordControl />
    <MasterControl />
  </>
)

export default Omnichord
