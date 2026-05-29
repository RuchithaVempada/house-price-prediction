import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [isRegister, setIsRegister] =
    useState(false);

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      password: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // SAVE USERNAME

    localStorage.setItem(
      "username",
      formData.username
    );

    // SIMPLE LOGIN / REGISTER

    if (isRegister) {

      alert("Registration Successful");

    } else {

      alert("Login Successful");

    }

    navigate("/dashboard");

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('/images/familyhome.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      {/* OVERLAY */}

      <div
        style={{
          backgroundColor:
            "rgba(255,255,255,0.92)",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          boxShadow:
            "0px 0px 20px rgba(0,0,0,0.3)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#2563eb"
          }}
        >
          {isRegister
            ? "Create Account"
            : "Login"}
        </h1>

        <form onSubmit={handleSubmit}>

          {/* USERNAME */}

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* EMAIL */}

          {isRegister && (

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

          )}

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            style={buttonStyle}
          >

            {isRegister
              ? "Register"
              : "Login"}

          </button>

        </form>

        {/* FORGOT PASSWORD */}

        {!isRegister && (

          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: "#2563eb",
              cursor: "pointer"
            }}
            onClick={() =>
              alert(
                "Password reset link sent to your email"
              )
            }
          >
            Forgot Password?
          </p>

        )}

        {/* SWITCH LOGIN/REGISTER */}

        <p
          style={{
            marginTop: "20px",
            textAlign: "center"
          }}
        >

          {isRegister
            ? "Already have an account?"
            : "New User?"}

          <span
            onClick={() =>
              setIsRegister(!isRegister)
            }
            style={{
              color: "#2563eb",
              marginLeft: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >

            {isRegister
              ? "Login"
              : "Register"}

          </span>

        </p>

      </div>

    </div>

  );

}

const inputStyle = {

  width: "100%",

  padding: "14px",

  marginBottom: "15px",

  borderRadius: "10px",

  border: "1px solid #ccc",

  fontSize: "16px"

};

const buttonStyle = {

  width: "100%",

  padding: "14px",

  backgroundColor: "#2563eb",

  color: "white",

  border: "none",

  borderRadius: "10px",

  fontSize: "18px",

  cursor: "pointer",

  fontWeight: "bold"

};

export default Login;