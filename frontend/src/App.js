import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import Analytics from "./pages/Analytics";
import Comparison from "./pages/Comparison";
import MapView from "./pages/MapView";
import SavedProperties from "./pages/SavedProperties";
import Loans from "./pages/Loans";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/prediction"
          element={<Prediction />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/comparison"
          element={<Comparison />}
        />

        <Route
          path="/map"
          element={<MapView />}
        />

        <Route
          path="/saved"
          element={<SavedProperties />}
        />

        <Route
          path="/loans"
          element={<Loans />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;