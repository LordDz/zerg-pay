import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/app.css";
import { Routing } from "./components/routing/routing";

const App: FunctionComponent = () => {
  return <Routing />;
};

const rootCheck = document.getElementById("root");
if (rootCheck != null) {
  const root = ReactDOM.createRoot(rootCheck);
  root.render(<App />);
}
