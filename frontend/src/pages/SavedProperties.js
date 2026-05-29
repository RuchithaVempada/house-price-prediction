import React, { useContext } from "react";

import Navbar from "../components/Navbar";

import PropertyCard from "../components/PropertyCard";

import {
  SavedContext
} from "../context/SavedContext";

function SavedProperties() {

  const { savedProperties } =
    useContext(SavedContext);

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6"
      }}
    >

      <Navbar />

      {/* HEADER */}

      <div
        style={{
          background:
            "linear-gradient(to right,#2563eb,#06b6d4)",
          padding: "70px 20px",
          textAlign: "center",
          color: "white"
        }}
      >

        <h1
          style={{
            fontSize: "60px"
          }}
        >
          Saved Properties
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "22px"
          }}
        >
          Your Favourite Dream Homes
        </p>

      </div>

      {/* PROPERTIES */}

      <div style={{ padding: "40px" }}>

        {savedProperties.length === 0 ? (

          <div
            style={{
              textAlign: "center",
              marginTop: "80px"
            }}
          >

            <h2>
              No Saved Properties Yet
            </h2>

            <p>
              Save your favourite homes
              from Dashboard.
            </p>

          </div>

        ) : (

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "30px"
            }}
          >

            {savedProperties.map(
              (property, index) => (

                <PropertyCard
                  key={index}
                  property={property}
                />

              )
            )}

          </div>

        )}

      </div>

    </div>

  );

}

export default SavedProperties;