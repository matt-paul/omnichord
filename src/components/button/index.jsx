import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: none;
  border: none;
  width: 33px;
  height: 42px;
  padding: 0;
`

const OmnichordButton = ({ toggleOnOff, on, colour }) => (
  <Button onClick={toggleOnOff}>
    <svg>
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
