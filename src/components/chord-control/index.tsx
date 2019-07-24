import React from "react"
import SectionContainer from "../section-container"
import ChordButton from "../chord-button"
import { majorChords } from "./majorChords"
import { BROWNISH } from "../../colours"
import { Chord } from "../../types"

export const renderChordButtons = (chords: Chord[], onMouseClick: any) =>
  chords.map(chord => (
    <ChordButton
      key={chord.key}
      freq={chord.freq}
      colour={BROWNISH}
      onClick={onMouseClick}
    />
  ))

const ChordControl = () => {
  let fired = false

  const handleKeyDown = (e: any) => {
    const chord = majorChords.find(chord => chord.keyCode === e.keyCode)
    if (chord && !fired) {
      fired = true
      const ctx = new AudioContext()
      let osc = ctx.createOscillator()
      osc.type = "square"
      osc.frequency.value = chord.freq
      osc.connect(ctx.destination)
      osc.start()

      document.addEventListener("keyup", function() {
        if (osc) {
          osc.stop(ctx.currentTime)
          osc.disconnect()
          fired = false
        }
      })
    }
  }

  const handleMouseClick = (freq: any) => {
    const ctx = new AudioContext()
    let osc = ctx.createOscillator()
    osc.type = "square"
    osc.frequency.value = freq
    osc.connect(ctx.destination)
    osc.start()

    document.addEventListener("mouseup", function() {
      if (osc) {
        osc.stop(ctx.currentTime)
        osc.disconnect()
      }
    })
  }

  document.addEventListener("keydown", handleKeyDown)

  return (
    <SectionContainer>
      <div style={{ display: "flex" }}>
        {renderChordButtons(majorChords, handleMouseClick)}
      </div>
    </SectionContainer>
  )
}

export default ChordControl
