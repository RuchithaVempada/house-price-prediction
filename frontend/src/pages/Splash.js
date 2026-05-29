import React, {
  useEffect
} from "react";

import {
  useNavigate
} from "react-router-dom";

function Splash() {

  const navigate = useNavigate();

  useEffect(() => {

    setTimeout(() => {

      navigate("/login");

    }, 3000);

  }, []);

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right,#2563eb,#06b6d4)",
        color: "white",
        fontSize: "50px",
        fontWeight: "bold"
      }}
    >

      Welcome To DreamHouse

    </div>

  );

}

export default Splash;