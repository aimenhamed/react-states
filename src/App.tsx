import React, { useState } from 'react';
import logo from './logo.svg';


function App() {
  const [count, setCount] = useState(4)

  function decreaseCount() {
    setCount(prevCount => prevCount - 1)
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default App;

