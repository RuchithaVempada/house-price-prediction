import React, { useState } from "react";

function ChatBot() {

  const [openChat, setOpenChat] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        sender: "DreamBot",
        text:
          "Hello 👋 Welcome to DreamHouse AI."
      }
    ]);

  const [input, setInput] =
    useState("");

  const getReply = (msg) => {

    const text = msg.toLowerCase();

    if (text.includes("villa")) {

      return "Luxury Villas are available in Bangalore, Hyderabad and Chennai.";

    }

    if (text.includes("apartment")) {

      return "Affordable Apartments are available in Mumbai and Kolkata.";

    }

    if (text.includes("loan")) {

      return "Home loans start from 8.5% interest rate.";

    }

    if (text.includes("price")) {

      return "Property prices depend on city, area and features.";

    }

    if (text.includes("bangalore")) {

      return "Bangalore properties start from ₹75 Lakhs.";

    }

    if (text.includes("mumbai")) {

      return "Mumbai contains premium luxury homes.";

    }

    return "Please ask about properties, villas, apartments or loans.";

  };

  const sendMessage = () => {

    if (!input) return;

    const userMessage = {

      sender: "You",

      text: input

    };

    const botMessage = {

      sender: "DreamBot",

      text: getReply(input)

    };

    setMessages([
      ...messages,
      userMessage,
      botMessage
    ]);

    setInput("");

  };

  return (

    <>

      {/* SMALL POPUP */}

      {!openChat && (

        <div
          onClick={() => setOpenChat(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background:
              "linear-gradient(to right,#2563eb,#06b6d4)",
            color: "white",
            padding: "15px 20px",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow:
              "0px 0px 15px rgba(0,0,0,0.3)",
            zIndex: 999
          }}
        >

          💬 Chat With DreamBot

        </div>

      )}

      {/* CHAT WINDOW */}

      {openChat && (

        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow:
              "0px 0px 20px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            zIndex: 999
          }}
        >

          {/* HEADER */}

          <div
            style={{
              background:
                "linear-gradient(to right,#2563eb,#06b6d4)",
              color: "white",
              padding: "15px",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center"
            }}
          >

            <h2>DreamBot AI</h2>

            <button
              onClick={() =>
                setOpenChat(false)
              }
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer"
              }}
            >

              ✖

            </button>

          </div>

          {/* CHAT AREA */}

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "15px",
              backgroundColor: "#f3f4f6"
            }}
          >

            {messages.map(
              (message, index) => (

                <div
                  key={index}
                  style={{
                    textAlign:
                      message.sender ===
                      "You"
                        ? "right"
                        : "left",
                    marginBottom: "15px"
                  }}
                >

                  <div
                    style={{
                      display:
                        "inline-block",
                      padding: "12px",
                      borderRadius:
                        "15px",
                      backgroundColor:
                        message.sender ===
                        "You"
                          ? "#2563eb"
                          : "white",
                      color:
                        message.sender ===
                        "You"
                          ? "white"
                          : "black",
                      maxWidth: "80%"
                    }}
                  >

                    {message.text}

                  </div>

                </div>

              )
            )}

          </div>

          {/* INPUT */}

          <div
            style={{
              display: "flex",
              padding: "10px",
              gap: "10px",
              backgroundColor: "white"
            }}
          >

            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value
                )
              }
              placeholder="Ask anything..."
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "10px",
                border:
                  "1px solid #ccc"
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                backgroundColor:
                  "#2563eb",
                color: "white",
                border: "none",
                padding:
                  "12px 20px",
                borderRadius:
                  "10px",
                cursor: "pointer"
              }}
            >

              Send

            </button>

          </div>

        </div>

      )}

    </>

  );

}

export default ChatBot;