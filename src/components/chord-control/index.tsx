import React from "react"
import SectionContainer from "../section-container"
import ChordButton from "../chord-button"
import { majorChords } from "./majorChords"
import { BROWNISH } from "../../colours"
import { Chord } from "../../types"

export const renderChordButtons = (chords: Chord[], context: any) =>
  chords.map(chord => (
    <ChordButton
      key={chord.key}
      context={context}
      url={chord.src}
      colour={BROWNISH}
    />
  ))

const ChordControl = () => {
  const ctx = new AudioContext()

  return (
    <SectionContainer>
      <div style={{ display: "flex" }}>
        {renderChordButtons(majorChords, ctx)}
      </div>
    </SectionContainer>
  )
}

export default ChordControl
