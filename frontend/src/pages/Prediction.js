import React, { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

function Prediction() {

  const [formData, setFormData] = useState({

    city: "Bangalore",

    propertyType: "Villa",

    area: "",

    bedrooms: "",

    gym: true,

    pool: true,

    school: true,

    hospital: true,

    parking: true,

    lift: true

  });

  const [price, setPrice] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value

    });

  };

  const handleToggle = (name) => {

    setFormData({

      ...formData,

      [name]:
        !formData[name]

    });

  };

  const resetForm = () => {

    setFormData({

      city: "Bangalore",

      propertyType: "Villa",

      area: "",

      bedrooms: "",

      gym: true,

      pool: true,

      school: true,

      hospital: true,

      parking: true,

      lift: true

    });

    setPrice("");

  };

  const predictPrice = async () => {

    if (
      !formData.area ||
      !formData.bedrooms
    ) {

      alert(
        "Please fill Area and Bedrooms"
      );

      return;

    }

    try {

      setLoading(true);

      const typeValue =
        formData.propertyType ===
        "Villa"
          ? 1
          : 0;

      const response =
        await axios.post(

          "https://dreamhouse-backend-o3e2.onrender.com/predict",

          {

            city:
              formData.city,

            propertyType:
              typeValue,

            area:
              Number(
                formData.area
              ),

            bedrooms:
              Number(
                formData.bedrooms
              ),

            gym:
              formData.gym
                ? 1
                : 0,

            pool:
              formData.pool
                ? 1
                : 0,

            school:
              formData.school
                ? 1
                : 0,

            hospital:
              formData.hospital
                ? 1
                : 0,

            parking:
              formData.parking
                ? 1
                : 0,

            lift:
              formData.lift
                ? 1
                : 0

          }

        );

      setPrice(
        response.data
          .predicted_price
      );

    } catch (error) {

      console.log(error);

      alert(
        "Prediction Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  const cardStyle = {

    maxWidth: "750px",

    margin: "auto",

    background:
      "rgba(255,255,255,0.92)",

    padding: "35px",

    borderRadius: "20px",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.2)"

  };

  const inputStyle = {

    width: "100%",

    padding: "14px",

    marginBottom: "15px",

    borderRadius: "10px",

    border:
      "1px solid #ddd",

    fontSize: "16px"

  };

  const toggleRow = {

    display: "grid",

    gridTemplateColumns:
      "1fr 1fr",

    gap: "10px",

    marginBottom: "15px"

  };

  const toggleBtn = (active) => ({

    padding: "10px",

    borderRadius: "10px",

    border: "none",

    cursor: "pointer",

    backgroundColor:
      active
        ? "#22c55e"
        : "#e5e7eb",

    color:
      active
        ? "white"
        : "black",

    fontWeight: "bold"

  });

  return (

    <div
      style={{

        minHeight: "100vh",

        backgroundImage:
          "url('/images/familyhome.jpg')",

        backgroundSize: "cover",

        backgroundPosition:
          "center",

        padding: "40px"

      }}
    >

      <Navbar />

      <div style={cardStyle}>

        <h1
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "25px",
            color: "#2563eb"
          }}
        >
          AI House Price Prediction
        </h1>

        {/* CITY */}

        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          style={inputStyle}
        >

          <option>
            Bangalore
          </option>

          <option>
            Chennai
          </option>

          <option>
            Delhi
          </option>

          <option>
            Hyderabad
          </option>

          <option>
            Kolkata
          </option>

          <option>
            Mumbai
          </option>

        </select>

        {/* PROPERTY TYPE */}

        <select
          name="propertyType"
          value={
            formData.propertyType
          }
          onChange={handleChange}
          style={inputStyle}
        >

          <option>
            Villa
          </option>

          <option>
            Apartment
          </option>

        </select>

        {/* AREA */}

        <input
          type="number"
          name="area"
          placeholder="Area (sq ft)"
          value={formData.area}
          onChange={handleChange}
          style={inputStyle}
        />

        {/* BEDROOMS */}

        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={
            formData.bedrooms
          }
          onChange={handleChange}
          style={inputStyle}
        />

        {/* AMENITIES */}

        <h3
          style={{
            marginBottom: "15px"
          }}
        >
          Amenities
        </h3>

        <div style={toggleRow}>

          <button
            onClick={() =>
              handleToggle("gym")
            }
            style={toggleBtn(
              formData.gym
            )}
          >
            Gym
          </button>

          <button
            onClick={() =>
              handleToggle("pool")
            }
            style={toggleBtn(
              formData.pool
            )}
          >
            Pool
          </button>

          <button
            onClick={() =>
              handleToggle(
                "school"
              )
            }
            style={toggleBtn(
              formData.school
            )}
          >
            School
          </button>

          <button
            onClick={() =>
              handleToggle(
                "hospital"
              )
            }
            style={toggleBtn(
              formData.hospital
            )}
          >
            Hospital
          </button>

          <button
            onClick={() =>
              handleToggle(
                "parking"
              )
            }
            style={toggleBtn(
              formData.parking
            )}
          >
            Parking
          </button>

          <button
            onClick={() =>
              handleToggle("lift")
            }
            style={toggleBtn(
              formData.lift
            )}
          >
            Lift
          </button>

        </div>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "10px",
            flexWrap: "wrap"
          }}
        >

          {/* PREDICT */}

          <button
            onClick={predictPrice}
            disabled={loading}
            style={{
              flex: 1,
              padding: "15px",
              backgroundColor:
                loading
                  ? "gray"
                  : "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >

            {
              loading
                ? "Predicting..."
                : "Predict Price"
            }

          </button>

          {/* RESET */}

          <button
            onClick={resetForm}
            style={{
              flex: 1,
              padding: "15px",
              backgroundColor:
                "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Reset
          </button>

        </div>

        {/* GO BACK */}

        <button
          onClick={() =>
            window.location.href = "/dashboard"
          }
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "14px",
            backgroundColor:
              "#111827",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ← Go Back To Home
        </button>

        {/* RESULT */}

        {price && (

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              background:
                "#dcfce7",
              padding: "20px",
              borderRadius: "15px"
            }}
          >

            <h2>
              Predicted Price
            </h2>

            <h1
              style={{
                color: "#16a34a",
                fontSize: "45px"
              }}
            >
              ₹ {price}
            </h1>

          </div>

        )}

      </div>

    </div>

  );

}

export default Prediction;