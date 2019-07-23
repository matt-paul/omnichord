import React, { useState } from "react"

interface Props {
  onChange: any
}
const Knob = ({ onChange }: Props) => {
  const START_ANGLE = 10
  const END_ANGLE = 280
  const MIN_VOLUME = 1
  const MAX_VOLUME = 128

  const convertRange = (
    oldMin: number,
    oldMax: number,
    newMin: number,
    newMax: number,
    oldValue: number,
  ) => ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin

  const [degree, setDegree] = useState(START_ANGLE)

  const startDrag = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as HTMLElement
    const knob = target.getBoundingClientRect()

    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    }

    const moveHandler = (event: MouseEvent) => {
      const getDegree = (
        cX: number,
        cY: number,
        pts: { x: number; y: number },
      ) => {
        const x = cX - pts.x
        const y = cY - pts.y

        const degree = (Math.atan(y / x) * 180) / Math.PI

        const firstHalfofVolumeControl = (x < 0 && y >= 0) || (x < 0 && y < 0)

        const QUARTER_OFFSET = 90
        const THREE_QUARTER_OFFSET = 270

        const degreeWithOffset = firstHalfofVolumeControl
          ? degree + QUARTER_OFFSET
          : degree + THREE_QUARTER_OFFSET

        return Math.min(Math.max(START_ANGLE, degreeWithOffset), END_ANGLE)
      }

      const currentDegree = getDegree(event.clientX, event.clientY, pts)

      setDegree(currentDegree)

      const newVolume = Math.floor(
        convertRange(
          START_ANGLE,
          END_ANGLE,
          MIN_VOLUME,
          MAX_VOLUME,
          currentDegree,
        ),
      )

      onChange(newVolume)
    }
    document.addEventListener("mousemove", moveHandler)
    document.addEventListener("mouseup", e => {
      document.removeEventListener("mousemove", moveHandler)
    })
  }

  return (
    <svg
      id="master-volume"
      width="78px"
      height="78px"
      xmlns="http://www.w3.org/2000/svg"
      onMouseDown={startDrag}
      style={{ transform: `rotate(${Math.min(degree, 260)}deg)` }}
    >
      <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
        <circle stroke="#795F4B" fill="#947961" cx="41.5" cy="41.5" r="38.5" />
        <path
          d="M36 52L23 73"
          stroke="#1D1313"
          strokeWidth="4"
          strokeLinecap="square"
        />
      </g>
    </svg>
  )
}

export default Knob
