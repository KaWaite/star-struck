// API imports
import React from "react";
import { Typography } from "@rmwc/typography";

// Image imports
import Earth from "../images/large_images/Earth_large.png";

// CSS

// RMWC CSS
import "@material/typography/dist/mdc.typography.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/elevation/dist/mdc.elevation.css";

function Article() {
  return (
    <div className="article-container">
      <div
        className="planet-background"
        style={{
          backgroundImage: `url(${Earth})`,
        }}
      />

      {/* <Card className="card">
        <CardMedia
          square
          style={{
            backgroundImage: `url(${Earth})`,
          }}
        />
      </Card> */}
      <div className="article-content">
        <Typography use="headline3" className="header-underlined">
          SpaceX to the Rescue
        </Typography>
        <Typography use="subtitle1" className="subtitle">
          Written by: John Williams | | <i>May 4th, 2018</i>
        </Typography>
        <Typography use="body2">
          This is going to be an article of SpaceX.This is going to be an
          article of SpaceX. This is going to be an article of SpaceX.This is
          going to be an article of SpaceX. This is going to be an article of
          SpaceX.This is going to be an article of SpaceX. This is going to be
          an article of SpaceX.This is going to be an article of SpaceX. This is
          going to be an article of SpaceX.This is going to be an article of
          SpaceX. This is going to be an article of SpaceX.This is going to be
          an article of SpaceX. This is going to be an article of SpaceX.This is
          going to be an article of SpaceX.
          <br />
          <br />
          This is going to be an article of SpaceX.This is going to be an
          article of SpaceX. This is going to be an article of SpaceX.This is
          going to be an article of SpaceX. This is going to be an article of
          SpaceX.This is going to be an article of SpaceX. This is going to be
          an article of SpaceX.This is going to be an article of SpaceX.
        </Typography>
      </div>
    </div>
  );
}

export default Article;
