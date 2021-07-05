import React, { useState } from 'react';
import logo from './logo.svg';

function countInitial() {
  console.log('run function');
  return 4;
}

function App() {
  const [count, setCount] = useState(() => countInitial())

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

