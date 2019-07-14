import React from 'react';
import OnOffButton from './components/on-off-button';
import VolumeKnob from './components/volume-knob';

class MasterControl extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      on: 'hello',
    };
    this.toggleClick = this.toggleClick.bind (this);
  }
  toggleClick () {
    this.setState ({
      on: !this.state.on,
    });
  }
  render () {
    return (
      <div style={styles.masterControl}>
        <svg width="355" height="300" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-82 -77)" fill="none" fillRule="evenodd">
            <path
              d="M435 375V79L85 80c24.5 69.67 70.08 132.5 136.75 188.52 66.66 56 137.74 91.5 213.25 106.48z"
              stroke="#000"
              strokeWidth="3"
              fill="#AD8E6A"
            />
            <text
              fontFamily="ArialUnicodeMS, Arial Unicode MS"
              fontSize="14"
              fill="#200C02"
              transform="translate(272 252)"
            >
              <tspan x="0" y="15">
                MASTER CONTROL
              </tspan>
            </text>
            <path
              d="M272 254h130M272 270h130"
              stroke="#200C02"
              strokeLinecap="square"
            />
            <text
              fontFamily="ArialUnicodeMS, Arial Unicode MS"
              fontSize="12"
              fill="#200C02"
            >
              <tspan x="227" y="216">
                power
              </tspan>
            </text>
            <text
              fontFamily="ArialUnicodeMS, Arial Unicode MS"
              fontSize="12"
              fill="#200C02"
            >
              <tspan x="345" y="216">
                volume
              </tspan>
            </text>
            <path
              d="M223 137h39c3.33 2 5 3.33 5 4v47s-3 2-5 3c-1.33.67-13.67 1-37 1-4-4.67-6-6-6-4v-47c.22-1.55.55-2.55 1-3 .45-.45 1.45-.78 3-1z"
              stroke="#805653"
              fill="#805653"
            />

            <circle
              stroke="#979797"
              fill={this.state.on ? 'red' : '#3B111A'}
              cx="243"
              cy="113"
              r="7"
            />
            <g transform="translate(328 121)">
              <circle
                stroke="#805653"
                fill="#805653"
                cx="41.5"
                cy="41.5"
                r="41.5"
              />
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
          </g>
        </svg>
        <OnOffButton toggleOnOff={this.toggleClick} on={this.state.on} />
        <VolumeKnob />
      </div>
    );
  }
}

const styles = {
  masterControl: {
    position: 'relative',
  },
};

export default MasterControl;
