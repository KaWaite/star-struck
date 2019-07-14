import React from "react";
import "../styles/landing.css";
import { Typography } from "@rmwc/typography";

function Landing() {
  return (
    <div id="landing">
      <div id="dialog">
        <Typography use="headline1">Star Struck </Typography>
        <Typography use="headline5">
          A space in time that you won't want to miss...
        </Typography>
      </div>
    </div>
  );
}

export default Landing;
