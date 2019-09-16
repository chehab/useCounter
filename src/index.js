import React from "react";
import ReactDOM from "react-dom";

import useCounter from "./useCounter";
import "./styles.css";

function App() {
  const { count, increment, decrement } = useCounter(35);

  return (
    <div className="App">
      <h1>{`Count: ${count}`}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
