import React, { useState } from "react"
import styled from "styled-components"

import Knob from "../knob"
import Button from "../button"
import SectionContainer from "../section-container"
import Background from "../mode-control-background"

import { BLUE, BROWNISH } from "../../colours"

const ChordStyle = styled.div`
  position: absolute;
  left: 277px;
  top: 125px;
`

const ChordHold = styled.div`
  position: absolute;
  left: 198px;
  top: 125px;
`

const StringSustain = styled.div`
  left: 84px;
  position: absolute;
  bottom: 64px;
`

const StringVolume = styled.div`
  left: 172px;
  position: absolute;
  bottom: 64px;
`

const ChordVolume = styled.div`
  position: absolute;
  bottom: 64px;
  left: 260px;
`

const ModeControl = () => {
  const [state, setState] = useState({
    stringSustain: 0,
    stringVolume: 0,
    chordVolume: 0,
    chordHoldToggle: false,
    autoBassManualToggle: false,
  })
  const handleStringSustain = (value: number) =>
    setState({ ...state, stringSustain: value })

  const handleStringVolume = (value: number) =>
    setState({ ...state, stringVolume: value })

  const handleChordVolume = (value: number) =>
    setState({ ...state, chordVolume: value })

  const handleChordHoldToggle = () =>
    setState({ ...state, chordHoldToggle: !state.chordHoldToggle })

  const handleAutoBassManualToggle = () =>
    setState({ ...state, autoBassManualToggle: !state.autoBassManualToggle })

  return (
    <SectionContainer>
      <Background />
      <StringSustain>
        <Knob onChange={handleStringSustain} />
      </StringSustain>
      <StringVolume>
        <Knob onChange={handleStringVolume} />
      </StringVolume>
      <ChordVolume>
        <Knob onChange={handleChordVolume} />
      </ChordVolume>
      <ChordHold>
        <Button
          onClick={handleChordHoldToggle}
          on={state.chordHoldToggle}
          colour={BROWNISH}
        />
      </ChordHold>

      <ChordStyle>
        <Button
          onClick={handleAutoBassManualToggle}
          on={state.autoBassManualToggle}
          colour={BLUE}
        />
      </ChordStyle>
    </SectionContainer>
  )
}

export default ModeControl
