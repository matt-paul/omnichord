import React, { useState, FunctionComponent } from "react"
import styled from "styled-components"
import Background from "../rhythm-control-background"
import Knob from "../knob"
import Button from "../button"
import SectionContainer from "../section-container"

import { BLUE, BROWNISH } from "../../colours"

const Tempo = styled.div`
  position: absolute;
  left: 183px;
  top: 157px;
`

const Volume = styled.div`
  position: absolute;
  left: 272px;
  top: 157px;
`

const BlueButton = styled.div`
  position: absolute;
  left: 28px;
  top: 58px;
`
const March = styled.div`
  position: absolute;
  left: 87px;
  top: 58px;
`
const Tango = styled.div`
  position: absolute;
  left: 146px;
  top: 58px;
`
const Blues = styled.div`
  position: absolute;
  left: 205px;
  top: 58px;
`
const Swing = styled.div`
  position: absolute;
  left: 264px;
  top: 58px;
`
const Waltz = styled.div`
  position: absolute;
  left: 323px;
  top: 58px;
`

const RhythmControl: FunctionComponent = () => {
  const [state, setState] = useState({
    topRow: true,
    activeBeat: "rockOne",
    tempo: 120,
    volume: 0,
  })

  const handleTempo = (value: number) => setState({ ...state, tempo: value })
  const handleRhythmVolume = (value: number) =>
    setState({ ...state, volume: value })

  return (
    <SectionContainer>
      <BlueButton>
        <Button
          colour={BLUE}
          on={false}
          onClick={() => setState({ ...state, topRow: !state.topRow })}
        />
      </BlueButton>
      <March>
        <Button
          colour={BROWNISH}
          on={state.topRow === false}
          onClick={() =>
            setState({
              ...state,
              activeBeat: state.topRow ? "rockOne" : "march",
            })
          }
        />
      </March>
      <Tango>
        <Button
          colour={BROWNISH}
          on={state.topRow === false}
          onClick={() =>
            setState({
              ...state,
              activeBeat: state.topRow ? "rockTwo" : "tango",
            })
          }
        />
      </Tango>
      <Blues>
        <Button
          colour={BROWNISH}
          on={state.topRow === false}
          onClick={() =>
            setState({ ...state, activeBeat: state.topRow ? "disco" : "blues" })
          }
        />
      </Blues>
      <Swing>
        <Button
          colour={BROWNISH}
          on={state.topRow === false}
          onClick={() =>
            setState({ ...state, activeBeat: state.topRow ? "latin" : "swing" })
          }
        />
      </Swing>
      <Waltz>
        <Button
          colour={BROWNISH}
          on={state.topRow === false}
          onClick={() =>
            setState({
              ...state,
              activeBeat: state.topRow ? "country" : "waltz",
            })
          }
        />
      </Waltz>
      <Tempo>
        <Knob onChange={handleTempo} />
      </Tempo>
      <Volume>
        <Knob onChange={handleRhythmVolume} />
      </Volume>

      <Background />
    </SectionContainer>
  )
}

export default RhythmControl
