import React from "react";
import { Typography } from "@rmwc/typography";

export default function Footer() {
  return (
    <div style={{ height: "15vh", position: "relative" }}>
      <Typography
        use="overline"
        theme="secondary"
        style={{
          position: "absolute",
          bottom: "0.5rem",
          marginLeft: "2rem"
        }}
      >
        Kyle Waite
      </Typography>
      <Typography
        use="overline"
        theme="secondary"
        style={{
          position: "absolute",
          bottom: "0.5rem",
          marginRight: "2rem",
          right: "0"
        }}
      >
        Contact Us
      </Typography>
    </div>
  );
}
