import React, { Fragment, useState } from "react";
import { sum } from "./util/util";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <span data-testid ="span">{count}</span>
      <p >p</p>
      <button onClick={() => setCount((prev)=>prev+2)}>Increment</button>
      <p>Hello</p>
    </>
  );
}

export default App;
