import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import logo from "./logo.png";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
    </header>
    <App />
  </React.StrictMode>
);

reportWebVitals();
