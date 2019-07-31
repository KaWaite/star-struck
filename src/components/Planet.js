import React from "react";

import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

export default function InfoBar() {
  return (
    <div style={{ background: "rgba(250,250,250)" }}>
      <div
        style={{
          margin: "auto",
          paddingTop: "20vh",
          paddingBottom: "20vh",
          width: "80%"
        }}
      >
        <Typography
          use="headline3"
          style={{
            borderBottom: "solid 1px",
            display: "block",
            width: "60%",
            textAlign: "left",
            paddingLeft: "10px",
            marginBottom: "50px"
          }}
        >
          Mars
        </Typography>

        <Typography use="body1">
          This is going to be the description of the planet.This is going to be
          the description of the planet.This is going to be the description of
          the planet.This is going to be the description of the planet.This is
          going to be the description of the planet.This is going to be the
          description of the planet.This is going to be the description of the
          planet.This is going to be the description of the planet.This is going
          to be the description of the planet.
          <br />
          <br />
          This is going to be the description of the planet.This is going to be
          the description of the planet.This is going to be the description of
          the planet.This is going to be the description of the planet.This is
          going to be the description of the planet.This is going to be the
          description of the planet.
        </Typography>
      </div>
    </div>
  );
}
