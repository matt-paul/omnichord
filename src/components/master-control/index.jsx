import React, { useState } from "react"
import { RedButton } from "../button/index"
import { useSpring, animated, Easing } from "react-spring"

import SectionContainer from "../section-container"
import VolumeControl from "../knob"

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
  const aniProps = useSpring({
    to: [{ opacity: 1, config: { duration: 3000 } }],
    from: { opacity: 0 },
  })

  return (
    <SectionContainer>
      <svg width="355" height="300" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(3 2)" fill="none" fillRule="evenodd">
          <path
            d="M350 296V0L0 1c24.502 69.67 70.084 132.51 136.747 188.518C203.41 245.527 274.494 281.021 350 296z"
            stroke="#000"
            strokeWidth="3"
            fill="#AD8E6A"
          />
          <text
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="14"
            fill="#200C02"
            transform="translate(187 173)"
          >
            <tspan x="0" y="15">
              MASTER CONTROL
            </tspan>
          </text>
          <path
            d="M187 175h130M187 191h130"
            stroke="#200C02"
            strokeLinecap="square"
          />
          <text
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="142" y="137">
              power
            </tspan>
          </text>
          <text
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="260" y="137">
              volume
            </tspan>
          </text>
          <path
            d="M138 58h39c3.333 2 5 3.333 5 4v47s-3 2-5 3c-1.333.667-13.667 1-37 1-4-4.667-6-6-6-4V62c.218-1.55.55-2.55 1-3 .45-.45 1.45-.782 3-1z"
            stroke="#805653"
            fill="#805653"
          />
          <animated.circle
            style={state.on ? aniProps : {}}
            stroke="black"
            strokeWidth="1"
            fill={state.on ? "red" : "#3B111A"}
            cx="158"
            cy="34"
            r="6"
          />
          <g transform="translate(243 42)" fill="#805653" stroke="#805653">
            <circle cx="41.5" cy="41.5" r="41.5" />
          </g>
        </g>
      </svg>

      <RedButton toggleOnOff={togglePower} on={state.on} />
      <div
        style={{
          width: "78px",
          height: "78px",
          position: "absolute",
          left: "249px",
          top: "46px",
        }}
      >
        <VolumeControl onChange={handleChange} />
      </div>
    </SectionContainer>
  )
}

export default MasterControl
