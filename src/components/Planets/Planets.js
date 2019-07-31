import React from "react";
import PlanetCards from "../PlanetCards/PlanetCards";

import { Grid } from "@rmwc/grid";
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
          our planets
        </Typography>

        <Grid style={{ paddingTop: "5vh" }}>
          <PlanetCards />
        </Grid>
      </div>
    </div>
  );
}
