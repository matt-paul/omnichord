import React from "react"
import SectionContainer from "../section-container"
import ChordButton from "../chord-button"
import { majorChords } from "./majorChords"
import { BROWNISH } from "../../colours"
import { Chord } from "../../types"

export const renderChordButtons = (chords: Chord[]) =>
  chords.map(chord => (
    <ChordButton key={chord.key} url={chord.src} colour={BROWNISH} />
  ))

const ChordControl = () => {
  return (
    <SectionContainer>
      <div style={{ display: "flex" }}>{renderChordButtons(majorChords)}</div>
    </SectionContainer>
  )
}

export default ChordControl
