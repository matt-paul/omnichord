import React, { useState } from "react"
import styled from "styled-components"
import Button from "../button/index"

import SectionContainer from "../section-container"
import Knob from "../knob"
import Background from "../master-control-background"

const Power = styled.div`
  left: 144px;
  position: absolute;
  top: 66px;
`

const MasterVolume = styled.div`
  position: absolute;
  left: 249px;
  top: 46px;
`

const MasterControl = () => {
  const [state, setState] = useState({
    on: false,
    volume: 0,
  })

  const togglePower = () => {
    setState({
      ...state,
      on: !state.on,
    })
  }

  const handleChange = newValue => {
    setState({
      ...state,
      volume: newValue,
    })
  }

  return (
    <SectionContainer>
      <Background powerOn={state.on} />
      <Power>
        <Button toggleOnOff={togglePower} on={state.on} colour="#900921" />
      </Power>
      <MasterVolume>
        <Knob onChange={handleChange} />
      </MasterVolume>
    </SectionContainer>
  )
}

export default MasterControl
