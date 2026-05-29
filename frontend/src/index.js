import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { SavedProvider } from "./context/SavedContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(

  <SavedProvider>

    <App />

  </SavedProvider>

);