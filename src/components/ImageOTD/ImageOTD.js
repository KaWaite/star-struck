import React from "react";
import "./ImageOTD.css";

function ImageOTD(props) {
  return (
    <div id="image-container" style={{ height: "100vh", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          width: "100vw",
          top: "9vh"
        }}
      >
        <h1>Image Of The Day</h1>
        <img id="image" src={props.image} alt="imageOfTheDay" />
      </div>
    </div>
  );
}
export default ImageOTD;
