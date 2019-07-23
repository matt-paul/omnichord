import React from "react"
import Button from "../button"
import SectionContainer from "../section-container"

import { majorChords } from "./majorChords"
import { BROWNISH } from "../../colours"
import { Chord } from "../../types"

export const renderChordButtons = (chords: Chord[]) =>
  chords.map(chord => (
    <Button key={chord.key} colour={BROWNISH} onClick={() => undefined} />
  ))

const ChordControl = () => (
  <SectionContainer>{renderChordButtons(majorChords)}</SectionContainer>
)

export default ChordControl
