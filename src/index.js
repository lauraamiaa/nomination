import React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "./styles/_fonts.scss";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
