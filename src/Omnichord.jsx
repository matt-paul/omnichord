import React from "react"
import MasterControl from "./components/master-control"
import ModeControl from "./components/mode-control"

const Omnichord = () => (
  <div>
    <ModeControl />
    <div style={{ height: "160px" }} />
    <MasterControl />
  </div>
)

export default Omnichord
