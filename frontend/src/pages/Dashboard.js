import React from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import PropertyCard from "../components/PropertyCard";

import ChatBot from "../components/ChatBot";

const properties = [

  {
    title: "Luxury Apartment",
    price: "₹ 75 Lakhs",
    location: "Bangalore",
    image: "/images/apartment.jpg"
  },

  {
    title: "Modern Villa",
    price: "₹ 2.5 Crores",
    location: "Chennai",
    image: "/images/villa.jpg"
  },

  {
    title: "Beach House",
    price: "₹ 4 Crores",
    location: "Mumbai",
    image: "/images/beachhouse.jpg"
  },

  {
    title: "Skyline Penthouse",
    price: "₹ 5.5 Crores",
    location: "Delhi",
    image: "/images/penthouse.jpg"
  }

];

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        fontFamily: "Arial"
      }}
    >

      {/* NAVBAR */}

      <Navbar />

      {/* HERO SECTION */}

      <div
        style={{
          position: "relative",
          height: "90vh",
          overflow: "hidden"
        }}
      >

        {/* BACKGROUND IMAGE */}

        <img
          src="/images/familyhome.jpg"
          alt="Family Home"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        {/* DARK OVERLAY */}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "rgba(0,0,0,0.55)"
          }}
        ></div>

        {/* CONTENT */}

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            width: "90%"
          }}
        >

          <h1
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow:
                "2px 2px 12px rgba(0,0,0,0.6)"
            }}
          >
            Find Your Dream Home
          </h1>

          <p
            style={{
              fontSize: "26px",
              lineHeight: "42px",
              maxWidth: "1000px",
              margin: "auto",
              textShadow:
                "1px 1px 8px rgba(0,0,0,0.6)"
            }}
          >
            Explore Luxury Villas,
            Premium Apartments,
            Beach Houses and Smart AI
            Price Prediction Across India
          </p>

          {/* BUTTON */}

          <div
            style={{
              marginTop: "40px"
            }}
          >

            <button
              onClick={() =>
                navigate("/prediction")
              }
              style={{
                padding: "18px 45px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "22px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow:
                  "0px 5px 15px rgba(0,0,0,0.3)"
              }}
            >
              Explore Properties
            </button>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          padding: "40px"
        }}
      >

        <div style={statCard}>
          <h1>500+</h1>
          <p>Properties</p>
        </div>

        <div style={statCard}>
          <h1>25+</h1>
          <p>Cities</p>
        </div>

        <div style={statCard}>
          <h1>1000+</h1>
          <p>Happy Customers</p>
        </div>

        <div style={statCard}>
          <h1>24/7</h1>
          <p>Support</p>
        </div>

      </div>

      {/* FEATURED PROPERTIES */}

      <div
        style={{
          padding: "40px"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "40px",
            color: "#111827"
          }}
        >
          Featured Properties
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px"
          }}
        >

          {properties.map(
            (property, index) => (

              <PropertyCard
                key={index}
                property={property}
              />

            )
          )}

        </div>

      </div>

      {/* SERVICES */}

      <div
        style={{
          padding: "60px 40px",
          backgroundColor: "white"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "45px",
            color: "#111827"
          }}
        >
          Our Services
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px"
          }}
        >

          <div style={serviceCard}>
            <h2>AI Prediction</h2>

            <p>
              Smart house price prediction
              using AI technology.
            </p>
          </div>

          <div style={serviceCard}>
            <h2>Property Comparison</h2>

            <p>
              Compare villas, apartments
              and luxury homes easily.
            </p>
          </div>

          <div style={serviceCard}>
            <h2>Map View</h2>

            <p>
              Explore properties city wise
              on interactive maps.
            </p>
          </div>

          <div style={serviceCard}>
            <h2>Home Loans</h2>

            <p>
              Easy loan guidance and EMI
              calculation support.
            </p>
          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "30px",
          textAlign: "center"
        }}
      >

        <h2>DreamHouse AI</h2>

        <p>
          India's Smart Real Estate Platform
        </p>

      </div>

      {/* CHATBOT */}

      <ChatBot />

    </div>

  );

}

const statCard = {

  backgroundColor: "white",

  padding: "30px",

  borderRadius: "20px",

  textAlign: "center",

  boxShadow:
    "0px 0px 15px rgba(0,0,0,0.1)"

};

const serviceCard = {

  backgroundColor: "#f3f4f6",

  padding: "30px",

  borderRadius: "20px",

  textAlign: "center",

  boxShadow:
    "0px 0px 10px rgba(0,0,0,0.08)"

};

export default Dashboard;