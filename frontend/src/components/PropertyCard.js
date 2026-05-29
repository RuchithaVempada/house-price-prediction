import React, {
  useContext
} from "react";

import {
  SavedContext
} from "../context/SavedContext";

function PropertyCard({ property }) {

  const {
    savedProperties,
    saveProperty,
    removeProperty
  } = useContext(SavedContext);

  const isSaved =
    savedProperties.find(
      (item) =>
        item.title === property.title
    );

  return (

    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow:
          "0px 0px 15px rgba(0,0,0,0.1)"
      }}
    >

      {/* IMAGE */}

      <img
        src={property.image}
        alt={property.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      {/* CONTENT */}

      <div style={{ padding: "20px" }}>

        <h2>{property.title}</h2>

        <h3
          style={{
            color: "#2563eb"
          }}
        >
          {property.price}
        </h3>

        <p>{property.location}</p>

        <p
          style={{
            marginTop: "10px",
            color: "#555"
          }}
        >
          Luxury property with modern
          amenities and premium design.
        </p>

        {/* BUTTON */}

        {!isSaved ? (

          <button
            onClick={() =>
              saveProperty(property)
            }
            style={{
              marginTop: "20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "100%"
            }}
          >

            ❤️ Save Property

          </button>

        ) : (

          <button
            onClick={() =>
              removeProperty(
                property.title
              )
            }
            style={{
              marginTop: "20px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "100%"
            }}
          >

            ❌ Unsave Property

          </button>

        )}

      </div>

    </div>

  );

}

export default PropertyCard;