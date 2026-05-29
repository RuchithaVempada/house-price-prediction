import React from "react";

import Navbar from "../components/Navbar";

function Analytics() {

  const cityData = [

    {
      city: "Bangalore",
      average: "₹ 95 Lakhs",
      growth: "+12%",
      properties: 1450,
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
    },

    {
      city: "Chennai",
      average: "₹ 80 Lakhs",
      growth: "+9%",
      properties: 1200,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    },

    {
      city: "Delhi",
      average: "₹ 1.5 Crore",
      growth: "+15%",
      properties: 2000,
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118"
    },

    {
      city: "Hyderabad",
      average: "₹ 88 Lakhs",
      growth: "+11%",
      properties: 1650,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },

    {
      city: "Kolkata",
      average: "₹ 70 Lakhs",
      growth: "+7%",
      properties: 980,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },

    {
      city: "Mumbai",
      average: "₹ 2.2 Crore",
      growth: "+18%",
      properties: 2500,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
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

      {/* PAGE */}

      <div
        style={{
          padding: "40px"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "bold",
            marginBottom: "50px",
            color: "#111827"
          }}
        >
          Real Estate Analytics Dashboard
        </h1>

        {/* CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px"
          }}
        >

          {cityData.map((item, index) => (

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
                src={item.image}
                alt={item.city}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "25px"
                }}
              >

                <h2
                  style={{
                    fontSize: "32px",
                    marginBottom: "15px",
                    color: "#2563eb"
                  }}
                >
                  {item.city}
                </h2>

                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px"
                  }}
                >
                  <strong>
                    Average Price:
                  </strong>{" "}
                  {item.average}
                </p>

                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px"
                  }}
                >
                  <strong>
                    Market Growth:
                  </strong>{" "}
                  {item.growth}
                </p>

                <p
                  style={{
                    fontSize: "20px"
                  }}
                >
                  <strong>
                    Properties Listed:
                  </strong>{" "}
                  {item.properties}
                </p>

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

export default Analytics;