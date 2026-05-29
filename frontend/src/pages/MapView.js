import React from "react";

import Navbar from "../components/Navbar";

function MapView() {

  const cities = [

    {
      city: "Bangalore",
      map:
        "https://www.google.com/maps?q=Bangalore&output=embed"
    },

    {
      city: "Chennai",
      map:
        "https://www.google.com/maps?q=Chennai&output=embed"
    },

    {
      city: "Mumbai",
      map:
        "https://www.google.com/maps?q=Mumbai&output=embed"
    },

    {
      city: "Hyderabad",
      map:
        "https://www.google.com/maps?q=Hyderabad&output=embed"
    }

  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6"
      }}
    >

      <Navbar />

      {/* HERO */}

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
          Explore Properties On Map
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "22px"
          }}
        >
          Discover locations across India
        </p>

      </div>

      {/* MAPS */}

      <div
        style={{
          padding: "40px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: "30px"
        }}
      >

        {cities.map((item, index) => (

          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0px 0px 15px rgba(0,0,0,0.1)"
            }}
          >

            <div
              style={{
                padding: "20px"
              }}
            >

              <h2>{item.city}</h2>

            </div>

            <iframe
              title={item.city}
              src={item.map}
              width="100%"
              height="350"
              style={{
                border: 0
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>

        ))}

      </div>

    </div>

  );

}

export default MapView;