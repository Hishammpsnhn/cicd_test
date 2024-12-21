import React, { Fragment, useState } from "react";
import { sum } from "./util/util";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <span data-testid ="span">{count}</span>
      <button onClick={() => setCount((prev)=>prev+2)}>Increment</button>
      <p>Hello</p>
      <p>Hai</p>
    </>
  );
}

export default App;
