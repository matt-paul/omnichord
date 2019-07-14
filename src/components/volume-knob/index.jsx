import React from 'react';

const VolumeKnob = () => (
  <button>
    <svg width="79" height="79" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
        <circle stroke="#795F4B" fill="#947961" cx="41.5" cy="41.5" r="38.5" />
        <path
          d="M36 52L23 73"
          stroke="#1D1313"
          stroke-width="4"
          stroke-linecap="square"
        />
      </g>
    </svg>

  </button>
);

export default VolumeKnob;
