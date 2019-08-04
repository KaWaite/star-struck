import React from "react";

export default function Logo() {
  return (
    <React.Fragment>
      <svg viewBox="10 35 600 300" width="100">
        <circle
          cx="-15"
          cy="150"
          r="100px"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />

        <circle
          cx="5"
          cy="150"
          r="100px"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
        <circle
          cx="225"
          cy="150"
          r="40px"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="300"
          cy="150"
          r="3px"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="525"
          cy="150"
          r="10px"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
        {/* <circle
          cx="17.5"
          cy="17.5"
          r="9"
          stroke="red"
          strokeWidth="2"
          fill="white"
        />
        <circle
          cx="17.5"
          cy="17.5"
          r="6"
          stroke="red"
          strokeWidth="2"
          fill="white"
        /> */}
      </svg>
    </React.Fragment>
  );
}
