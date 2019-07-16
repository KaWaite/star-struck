import React from "react";
import News from "./News";
import ImageList from "./ImageList";

import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

export default function InfoBar() {
  return (
    <div>
      <div
        style={{
          margin: "auto",
          paddingTop: "15vh",
          paddingBottom: "15vh",
          width: "80%"
        }}
      >
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
          space news
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
