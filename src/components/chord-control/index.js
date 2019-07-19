import React from "react"
import Button from "../button"
import SectionContainer from "../section-container"

import { majorChords } from "./majorChords"
import { BROWNISH } from "../../colours"

// generic button is toggle, need to make toggle and press options
export const renderChordButtons = chords =>
  chords.map(chord => <Button key={chord.key} colour={BROWNISH} />)

const ChordControl = () => (
  <SectionContainer>{renderChordButtons(majorChords)}</SectionContainer>
)

export default ChordControl
