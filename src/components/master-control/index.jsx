import React from "react"
import OnOffButton from "../on-off-button"
import VolumeKnob from "../volume-knob"

class MasterControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      on: "hello",
      volume: 0,
    }
    this.toggleClick = this.toggleClick.bind(this)
    this.setVolume = this.setVolume.bind(this)
  }
  toggleClick() {
    this.setState({
      on: !this.state.on,
    })
  }
  setVolume(mouseUp, mouseDown) {
    const difference = mouseDown.y - mouseUp.y

    const volumeAdjustment = diff => {
      const turnUpVolume = diff < -10
      const turnDownVolume = diff > 10
      if (turnUpVolume) {
        return 16
      }
      if (turnDownVolume) {
        return -16
      }
      return 0
    }

    this.setState({
      volume: this.state.volume + volumeAdjustment(difference),
    })
    // this.setState({
    //   volume: volumeChange,
    // })
  }
  render() {
    console.log(this.state.volume)
    return (
      <div style={styles.masterControl}>
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
            <circle
              stroke="#979797"
              fill={this.state.on ? "red" : "#3B111A"}
              cx="158"
              cy="34"
              r="7"
            />
            <g transform="translate(243 42)" fill="#805653" stroke="#805653">
              <circle cx="41.5" cy="41.5" r="41.5" />
            </g>
          </g>
        </svg>

        <OnOffButton toggleOnOff={this.toggleClick} on={this.state.on} />
        <VolumeKnob setVolume={this.setVolume} volume={this.state.volume} />
      </div>
    )
  }
}

const styles = {
  masterControl: {
    position: "relative",
  },
}

export default MasterControl
