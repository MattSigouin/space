import React from "react";
import "./App.css";

function App() {
  const backgroundHome =
    process.env.PUBLIC_URL + "/background-home-desktop.jpg";
  const containerStyle = {
    backgroundImage: `url(${backgroundHome})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <header>
        {/* Needs to be a NavBar */}
        00 Home 01 Destination 02 Crew 03 Technology
        <p className="description">
          So, you want to travel to
          <h2 className="h2">Space</h2>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </header>
    </div>
  );
}

export default App;
