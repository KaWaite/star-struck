import React from "react";

export default function ImageOTD(props) {
  return (
    <div
      style={{
        color: "white",
        marginTop: "4rem",
        textAlign: "center",
        width: "100%"
      }}
    >
      <h1>Image Of The Day</h1>
      <img
        src={props.image}
        alt="imageOfTheDay"
        style={{ maxWidth: "80%", height: "70vh", margin: "auto" }}
      />
    </div>
  );
}
