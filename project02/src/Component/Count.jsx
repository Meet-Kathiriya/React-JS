import React, { useState } from 'react';

export default function Count() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1>Simple Counter</h1>
            <p className="number">{count}</p>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}> + </button>
                <button onClick={() => setCount(count - 1)}> - </button>
                <button onClick={() => setCount(0)}> Reset </button>
            </div>
        </div>
    );
}