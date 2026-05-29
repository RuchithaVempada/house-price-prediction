import React from "react";

import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div
      style={{
        backgroundColor: "#2563eb",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}
    >

      <h1
        style={{
          color: "white"
        }}
      >
        DreamHouse
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        <Link to="/dashboard" style={style}>
          Home
        </Link>

        <Link to="/prediction" style={style}>
          Prediction
        </Link>

        <Link to="/analytics" style={style}>
          Analytics
        </Link>

        <Link to="/comparison" style={style}>
          Comparison
        </Link>

        <Link to="/map" style={style}>
          Map
        </Link>

        <Link to="/saved" style={style}>
          Saved
        </Link>

        <Link to="/loans" style={style}>
          Loans
        </Link>

      </div>

    </div>

  );

}

const style = {

  color: "white",

  textDecoration: "none",

  fontWeight: "bold"

};

export default Navbar;