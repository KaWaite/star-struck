import React from "react";
import "./ImageOTD.css";

function ImageOTD(props) {
  return (
    <div id="image-container">
      <h1>Image Of The Day</h1>
      <img id="image" src={props.image} alt="imageOfTheDay" />
    </div>
  );
}
export default ImageOTD;
