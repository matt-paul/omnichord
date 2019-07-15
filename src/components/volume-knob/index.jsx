import React, {useState, useEffect} from 'react';
const useKnobPosition = () => {
  const [position, setPosition] = useState ({x: 0, y: 0});

  useEffect (() => {
    const setFromEvent = event =>
      setPosition ({x: event.clientX, y: event.clientY});
    window.addEventListener ('mousedown', setFromEvent);

    return () => {
      window.removeEventListener ('mousedown', setFromEvent);
    };
  }, []);

  return position;
};

const VolumeKnob = () => {
  const position = useKnobPosition ();

  return (
    <button>
      <div>{position.x}: {position.y}</div>
      <svg width="79" height="79" xmlns="http://www.w3.org/2000/svg">
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
    </button>
  );
};

export default VolumeKnob;
