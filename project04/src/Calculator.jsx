import React, { useState } from 'react';

export default function Calculator() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const [ans, setAns] = useState(0)

  return (
    <div className="calc-box">
      <h2>Simple Calculator</h2>
      <input type='number' onChange={(e) => setA(e.target.value)} placeholder="Enter first number" />
      <input type='number' onChange={(e) => setB(e.target.value)} placeholder="Enter second number" />
      <div className="buttons">
        <button onClick={() => setAns(+a + +b)}> + </button>
        <button onClick={() => setAns(a - b)}> - </button>
        <button onClick={() => setAns(a * b)}> * </button>
        <button onClick={() => setAns(a / b)}> / </button>
      </div>
      <h3>Answer: {ans}</h3>
    </div>
  )
}