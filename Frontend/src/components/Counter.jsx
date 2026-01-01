import { useState } from "react";

export const Counter = () => {
const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(count + 1);
}
const handleDecrement = () => {
    setCount(count - 1);
}
const handleReset = () => {
    setCount(0);
}

    return (
        <>
        <h1>Counter Task</h1>
        <h2>Count: {count}</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
        </div>
        </>
    )
}