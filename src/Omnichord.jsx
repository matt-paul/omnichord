import React from "react"
import MasterControl from "./components/master-control"
import LevelModeControl from "./components/level-mode-control"

const Omnichord = () => (
  <div>
    <LevelModeControl />
    <div style={{ height: "160px" }} />
    <MasterControl />
  </div>
)

export default Omnichord
