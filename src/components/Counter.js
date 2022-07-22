import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <br />
      <button
        disabled={counter <= 0}
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          }
        }}
      >
        Moins
      </button>
      <button
        disabled={counter >= 10}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
