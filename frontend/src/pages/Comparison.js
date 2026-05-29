import React from "react";

import Navbar from "../components/Navbar";

function Comparison() {

  const properties = [

    {
      title: "Luxury Beach House",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      price: "₹ 2.5 Crore",
      location: "Goa Beach",
      type: "Beach House",
      bedrooms: 4,
      area: "3200 sq.ft",
      features: [
        "Sea View",
        "Swimming Pool",
        "Private Garden",
        "Parking"
      ]
    },

    {
      title: "Modern Villa",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      price: "₹ 1.8 Crore",
      location: "Bangalore",
      type: "Villa",
      bedrooms: 5,
      area: "4000 sq.ft",
      features: [
        "Gym",
        "Garden",
        "Home Theatre",
        "Security"
      ]
    },

    {
      title: "Premium Apartment",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      price: "₹ 85 Lakhs",
      location: "Hyderabad",
      type: "Apartment",
      bedrooms: 3,
      area: "1800 sq.ft",
      features: [
        "Lift",
        "Parking",
        "Club House",
        "24x7 Security"
      ]
    }

  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6"
      }}
    >

      {/* NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <div
        style={{
          padding: "40px"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "40px",
            fontWeight: "bold",
            color: "#111827"
          }}
        >
          Property Comparison
        </h1>

        {/* PROPERTY CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}
        >

          {properties.map((property, index) => (

            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0px 0px 15px rgba(0,0,0,0.15)"
              }}
            >

              <img
                src={property.image}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "20px"
                }}
              >

                <h2
                  style={{
                    fontSize: "28px",
                    marginBottom: "10px"
                  }}
                >
                  {property.title}
                </h2>

                <h3
                  style={{
                    color: "#2563eb",
                    marginBottom: "10px"
                  }}
                >
                  {property.price}
                </h3>

                <p>
                  <strong>
                    Location:
                  </strong>{" "}
                  {property.location}
                </p>

                <p>
                  <strong>
                    Type:
                  </strong>{" "}
                  {property.type}
                </p>

                <p>
                  <strong>
                    Bedrooms:
                  </strong>{" "}
                  {property.bedrooms}
                </p>

                <p>
                  <strong>
                    Area:
                  </strong>{" "}
                  {property.area}
                </p>

                <h4
                  style={{
                    marginTop: "15px",
                    marginBottom: "10px"
                  }}
                >
                  Features:
                </h4>

                <ul>

                  {property.features.map(
                    (feature, i) => (

                      <li key={i}>
                        • {feature}
                      </li>

                    )
                  )}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* GO BACK BUTTON */}

        <button
          onClick={() =>
            window.location.href =
              "/dashboard"
          }
          style={{
            width: "100%",
            marginTop: "40px",
            padding: "16px",
            backgroundColor: "#111827",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "20px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ← Go Back To Home
        </button>

      </div>

    </div>

  );

}

export default Comparison;