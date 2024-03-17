import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/app.css";
import { PagePayement } from "@/pages/payment/pagePayement";

const App: FunctionComponent = () => {
  return <PagePayement />;
};

const rootCheck = document.getElementById("root");
if (rootCheck != null) {
  const root = ReactDOM.createRoot(rootCheck);
  root.render(<App />);
}
