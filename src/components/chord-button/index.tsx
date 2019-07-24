import * as React from "react"

interface Props {
  freq: number
  colour: string
  onClick: (freq: number) => null
}

const ChordButton = ({ freq, colour, onClick }: Props) => (
  <div
    style={{
      height: "40px",
      width: "32px",
      background: `${colour}`,
      border: "1px solid black",
    }}
    onMouseDown={() => onClick(freq)}
  />
)

export default ChordButton
