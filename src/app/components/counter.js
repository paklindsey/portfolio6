"use client";
import { useState } from "react";

export const Counter = () => {
  console.log("counter component");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
};
