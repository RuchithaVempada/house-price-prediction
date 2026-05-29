import React from "react";

import Navbar from "../components/Navbar";

function Loans() {

  const banks = [

    {
      bank: "SBI",
      rate: "8.5%",
      emi: "₹ 24,000/month"
    },

    {
      bank: "HDFC",
      rate: "8.7%",
      emi: "₹ 25,000/month"
    },

    {
      bank: "ICICI",
      rate: "8.9%",
      emi: "₹ 26,000/month"
    },

    {
      bank: "Axis Bank",
      rate: "9.1%",
      emi: "₹ 27,000/month"
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
          Home Loan Assistance
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginTop: "20px"
          }}
        >
          Compare EMI, Interest Rates and
          Banks Easily
        </p>

      </div>

      {/* LOAN CARDS */}

      <div
        style={{
          padding: "50px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px"
        }}
      >

        {banks.map((item, index) => (

          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "30px",
              boxShadow:
                "0px 0px 15px rgba(0,0,0,0.1)"
            }}
          >

            <h2>{item.bank}</h2>

            <h3
              style={{
                color: "#2563eb",
                marginTop: "20px"
              }}
            >
              Interest Rate: {item.rate}
            </h3>

            <p
              style={{
                marginTop: "20px"
              }}
            >
              EMI Starting From:
            </p>

            <h2>{item.emi}</h2>

            <button
              style={{
                marginTop: "25px",
                width: "100%",
                padding: "12px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px"
              }}
            >
              Apply Loan
            </button>

          </div>

        ))}

      </div>

      {/* DOCUMENTS */}

      <div
        style={{
          backgroundColor: "white",
          margin: "40px",
          padding: "40px",
          borderRadius: "20px"
        }}
      >

        <h1
          style={{
            marginBottom: "30px"
          }}
        >
          Required Documents
        </h1>

        <ul
          style={{
            lineHeight: "40px",
            fontSize: "20px"
          }}
        >

          <li>Aadhar Card</li>

          <li>PAN Card</li>

          <li>Salary Slips</li>

          <li>Bank Statements</li>

          <li>Property Documents</li>

        </ul>

      </div>

    </div>

  );

}

export default Loans;