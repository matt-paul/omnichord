import React from "react"
import "./style.css"

export const RedButton = ({ toggleOnOff, on }) => (
  <button className={"red-button"} onClick={toggleOnOff}>
    <svg width="33" height="42">
      <path
        d="M1 1v40h31V1z"
        fill="#900921"
        stroke="#250A0F"
        strokeWidth={on ? "1" : "2"}
        fillRule="evenodd"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)

export const BlueButton = ({ toggleOnOff, on }) => (
  <button className={"blue-button"} onClick={toggleOnOff}>
    <svg width="33" height="42">
      <path
        d="M1 1v40h31V1z"
        fill="#22374A"
        stroke="#250A0F"
        strokeWidth={on ? "1" : "2"}
        fillRule="evenodd"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)

export const BrownButton = ({ toggleOnOff, on }) => (
  <button className={"brown-button"} onClick={toggleOnOff}>
    <svg width="33" height="42">
      <path
        d="M1 1v40h31V1z"
        fill="#A8835A"
        stroke="#250A0F"
        strokeWidth={on ? "1" : "2"}
        fillRule="evenodd"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)
