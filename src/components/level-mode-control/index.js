import React, { useState } from "react"

import Knob from "../knob"
import { BrownButton, BlueButton } from "../button"
import SectionContainer from "../section-container"

import "./style.css"

const LevelModeControl = () => {
  const [state, setState] = useState({
    stringSustain: 0,
    stringVolume: 0,
    chordVolume: 0,
    chordHoldToggle: false,
    autoBassManualToggle: false,
  })
  const handleStringSustain = value =>
    setState({ ...state, stringSustain: value })

  const handleStringVolume = value =>
    setState({ ...state, stringVolume: value })

  const handleChordVolume = value => setState({ ...state, chordVolume: value })

  const handleChordHoldToggle = () =>
    setState({ ...state, chordHoldToggle: !state.chordHoldToggle })

  const handleAutoBassManualToggle = () =>
    setState({ ...state, autoBassManualToggle: !state.autoBassManualToggle })

  return (
    <SectionContainer>
      <svg width="364" height="353">
        <g fill="none" fillRule="evenodd">
          <path
            d="M362 2v349L2 349.82c25.202-82.144 72.087-156.235 140.654-222.272C211.222 61.51 284.337 19.66 362 2z"
            stroke="#000"
            strokeWidth="3"
            fill="#AD8E6A"
          />
          <g stroke="#1D1313" strokeLinecap="square">
            <path d="M105 200v11M134.5 200H105" />
          </g>
          <g stroke="#1D1313" strokeLinecap="square">
            <path d="M234.5 200.5v11M205 200.5h29.5" />
          </g>
          <text
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="14"
            fill="#200C02"
            transform="translate(65 313)"
          >
            <tspan x="0" y="15">
              LEVEL MODE SELECTION
            </tspan>
          </text>
          <path
            d="M66.5 315H242M66.5 330H242"
            stroke="#200C02"
            strokeLinecap="square"
          />
          <text
            transform="translate(2 49)"
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="134" y="156">
              SonicStrings
            </tspan>
          </text>
          <text
            transform="translate(2 3)"
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="184.98" y="179">
              chord hold
            </tspan>
          </text>
          <text
            transform="translate(2 249)"
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="98.989" y="56">
              sustain
            </tspan>
          </text>
          <text
            transform="translate(2 249)"
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="193.658" y="56">
              volume
            </tspan>
          </text>
          <text
            transform="translate(2 265)"
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="282.991" y="40">
              chord
            </tspan>{" "}
            <tspan x="278.658" y="56">
              volume
            </tspan>
          </text>
          <text
            transform="translate(2 19)"
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="272.321" y="163">
              manual
            </tspan>{" "}
            <tspan x="275.324" y="179">
              {" "}
              chord
            </tspan>
          </text>
          <text
            transform="translate(2 -151)"
            fontFamily="ArialUnicodeMS, Arial Unicode MS"
            fontSize="12"
            fill="#200C02"
          >
            <tspan x="262.316" y="248">
              auto - bass
            </tspan>{" "}
            <tspan x="275.324" y="264">
              {" "}
              chord
            </tspan>
          </text>
          <path
            d="M199.917 168h28.437c2.43-1.636 3.646-2.727 3.646-3.273v-38.454s-2.188-1.637-3.646-2.455c-.972-.545-9.965-.818-26.979-.818-1.638.21-2.598.483-2.88.818-1.982 2.359-1.495 3.804-1.495 2.455v38.454c.159 1.27.402 2.087.73 2.455.327.367 1.056.64 2.187.818z"
            stroke="#2F1E16"
            fillOpacity=".85"
            fill="#2F1E16"
          />
          <path
            d="M278.917 168h28.437c2.43-1.6 3.646-2.667 3.646-3.2v-37.6s-2.188-1.6-3.646-2.4c-.972-.533-9.965-.8-26.979-.8-2.917 3.733-4.375 4.8-4.375 3.2v37.6c.159 1.24.402 2.04.73 2.4.327.36 1.056.626 2.187.8z"
            stroke="#2F1E16"
            fillOpacity=".87"
            fill="#2F1E16"
          />
          <circle
            cx="41.5"
            cy="41.5"
            r="41.5"
            transform="translate(258 209)"
            fill="#422C19"
            stroke="#78593C"
          />
          <g transform="translate(170 209)" fill="#422C19" stroke="#78593C">
            <circle cx="41.5" cy="41.5" r="41.5" />
          </g>
          <g transform="translate(82 209)" fill="#422C19" stroke="#78593C">
            <circle cx="41.5" cy="41.5" r="41.5" />
          </g>
        </g>
      </svg>
      <div className={"str-sustain"}>
        <Knob onChange={handleStringSustain} />
      </div>
      <div className={"str-volume"}>
        <Knob onChange={handleStringVolume} />
      </div>
      <div className={"chord-volume"}>
        <Knob onChange={handleChordVolume} />
      </div>
      <BrownButton
        toggleOnOff={handleChordHoldToggle}
        on={state.chordHoldToggle}
      />
      <BlueButton
        toggleOnOff={handleAutoBassManualToggle}
        on={state.autoBassManualToggle}
      />
    </SectionContainer>
  )
}

export default LevelModeControl
