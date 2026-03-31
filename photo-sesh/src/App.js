import './App.css';
import React from "react";
import Photobooth from "./components/Photobooth";
import "./styles/global.css"
const logoSrc = `${process.env.PUBLIC_URL}/assets/logo/Logo.png`;

function App() {
  return (
    <div className="App" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style = {{
        width: "100%",
        maxWidth: 1200,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "20px 32px"
      }}>
        <img src={logoSrc} alt="Logo" style={{ width: 50 }} />
        <h1 style={{
          fontFamily: "CantikaCute",
          color: "#c1b2f8",
          margin: 0
        }}>
          
          SweetSnaps Photobooth        </h1>
      </div>

      <div style={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "40px"
      }}
      >

      <Photobooth />

      </div>
    </div>
  );
}

export default App;