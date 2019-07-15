import React from 'react';

const OnOffButton = ({toggleOnOff, on}) => (
  <button style={styles.button} onClick={toggleOnOff}>
    <svg width="33" height="42" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1v40h31V1z"
        fill="#900921"
        stroke="#250A0F"
        strokeWidth={on ? '1' : '2'}
        fillRule="evenodd"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const styles = {
  button: {
    left: '136px',
    position: 'absolute',
    top: '66px',
    background: 'none',
    border: 'none',
  },
};

export default OnOffButton;
