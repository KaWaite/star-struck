import React, { Component } from "react";
import News from "./News";
import ImageList from "./ImageList";

import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

import "../globalStyles/Typography.css";

export default class InfoBar extends Component {
  render() {
    let info;
    if (window.matchMedia("(max-width: 780px)").matches) {
      /* The viewport is less than, or equal to, 700 pixels wide */
      info = (
        <>
          <GridCell span={12}>
            <ImageList />
          </GridCell>
          <GridCell span={12}>
            <News />
          </GridCell>
        </>
      );
    } else {
      /* The viewport is greater than 700 pixels wide */
      info = (
        <>
          <GridCell span={4}>
            <News />
          </GridCell>
          <GridCell span={8}>
            <ImageList />
          </GridCell>
        </>
      );
    }
    return (
      <div
        style={{
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        <div
          id="news"
          style={{
            margin: "auto",
            paddingTop: "5vh",
            paddingBottom: "5vh",
            width: "80%",
          }}
        >
          <Typography
            use="headline3"
            theme="textPrimaryOnDark"
            className="header-underlined"
          >
            space news
          </Typography>

          <Grid style={{ paddingTop: "1vh", borderLeft: "1px double darkred" }}>
            {info}
          </Grid>
        </div>
      </div>
    );
  }
}
