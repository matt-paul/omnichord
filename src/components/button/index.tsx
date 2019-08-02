import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
`

type ButtonColour = "#22374A" | "#A8835A" | "#900921"

interface IProps {
  onClick: any
  on?: boolean
  colour: ButtonColour
}
const OmnichordButton: FunctionComponent<IProps> = ({
  onClick,
  on,
  colour,
}) => (
  <Button onClick={onClick}>
    <svg width="33" height="42">
      <path
        d="M1 1v40h31V1z"
        fill={colour}
        stroke="#250A0F"
        strokeWidth={on ? "1" : "2"}
        fillRule="evenodd"
        strokeLinejoin="round"
      />
    </svg>
  </Button>
)

export default OmnichordButton
