import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/button/button";

const App: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);
  const onClick = () => {
    console.log("I love webpack and typescript.");
  };

  return (
    <>
      <div>
        <Button text="HEEEYOOO BUY STUFF YO NEED IT!" onClick={onClick} />

        <a href="https://react.dev" target="_blank">
          {/* <img src={logoReact} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

const rootCheck = document.getElementById("root");
if (rootCheck != null) {
  const root = ReactDOM.createRoot(rootCheck);
  root.render(<App />);
}
