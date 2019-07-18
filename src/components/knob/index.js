import React, { useState } from "react"

const Knob = ({ onChange }) => {
  const START_ANGLE = 10
  const END_ANGLE = 280
  const MIN_VOLUME = 1
  const MAX_VOLUME = 128

  const convertRange = (oldMin, oldMax, newMin, newMax, oldValue) =>
    ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin

  const [degree, setDegree] = useState(START_ANGLE)

  const startDrag = event => {
    event.preventDefault()
    const knob = event.target.getBoundingClientRect()

    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    }

    const moveHandler = event => {
      const getDegree = (cX, cY, pts) => {
        const x = cX - pts.x
        const y = cY - pts.y

        let deg = (Math.atan(y / x) * 180) / Math.PI
        // What exactly do these below 'ere mean?
        const firstHalfRotation = (x < 0 && y >= 0) || (x < 0 && y < 0)
        if (firstHalfRotation) {
          deg += 90
        } else {
          deg += 270
        }
        return Math.min(Math.max(START_ANGLE, deg), END_ANGLE)
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
    <div
      onMouseDown={startDrag}
      className="knob inner"
      style={{
        width: "78px",
        height: "78px",
        transform: `rotate(${Math.min(degree, 260)}deg)`,
        position: "absolute",
        left: "249px",
        top: "46px",
      }}
    >
      <svg
        id="master-volume"
        width="78px"
        height="78px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
          <circle
            stroke="#795F4B"
            fill="#947961"
            cx="41.5"
            cy="41.5"
            r="38.5"
          />
          <path
            d="M36 52L23 73"
            stroke="#1D1313"
            strokeWidth="4"
            strokeLinecap="square"
          />
        </g>
      </svg>
      <div className="grip" />
    </div>
  )
}

export default Knob
