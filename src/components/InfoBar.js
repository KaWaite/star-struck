import React from "react";
import News from "./News";
import ImageList from "./ImageList";

import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

export default function InfoBar() {
  return (
    <div
      style={{
        background: "#000000" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to top, #434343, #000000)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to top, #323232, #121212)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
    >
      <div style={{ margin: "auto", paddingTop: "20vh", width: "80%" }}>
        <Typography
          use="headline3"
          theme="textPrimaryOnDark"
          style={{
            borderBottom: "solid 1px",
            display: "block",
            width: "60%",
            textAlign: "left",
            paddingLeft: "10px",
            marginBottom: "50px"
          }}
        >
          contents
        </Typography>

        <Grid style={{ paddingTop: "5vh" }}>
          <GridCell span={4}>
            <News />
          </GridCell>
          <GridCell span={8}>
            <ImageList />
          </GridCell>
        </Grid>
      </div>
    </div>
  );
}
