import React, { useState, useEffect } from "react"

const useMousePosition = () => {
  const [mouseDownPosition, setMouseDownPosition] = useState({ x: 0, y: 0 })
  const [mouseUpPosition, setMouseUpPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setMouseDownFromEvent = event => {
      setMouseDownPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousedown", setMouseDownFromEvent)

    const setMouseUpFromEvent = event => {
      setMouseUpPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mouseup", setMouseUpFromEvent)

    return () => {
      window.removeEventListener("mousedown", setMouseDownFromEvent)
    }
  }, [])

  return [mouseDownPosition, mouseUpPosition]
}

const VolumeKnob = ({ volume, setVolume }) => {
  const [mouseDownPosition, mouseUpPosition] = useMousePosition()

  return (
    <button
      id="master-volume"
      style={{
        transform: `rotate(${volume}deg)`,
        border: "none",
        background: "none",
        position: "absolute",
        left: "240px",
        top: "46px",
      }}
      onMouseDown={event => {
        console.log(event.currentTarget.id)
        if (event.currentTarget.id === "master-volume")
          setVolume(mouseDownPosition, mouseUpPosition)
      }}
    >
      <div
        style={{
          transform: `rotate(${volume}deg)`,
        }}
      >
        <svg
          id="master-volume"
          width="79"
          height="79"
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
      </div>
    </button>
  )
}

export default VolumeKnob
