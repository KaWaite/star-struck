import React from "react";
import { Card, CardMedia } from "@rmwc/card";
import { Typography } from "@rmwc/typography";

import "@material/typography/dist/mdc.typography.css";
import "@material/card/dist/mdc.card.css";
import "./ImageOTD.css";

function ImageOTD(props) {
  return (
    <div className="image-container">
      <div className="image-background">
        <div className="image-content">
          <Typography use="headline2">Image Of The Day</Typography>
          <Card style={{ margin: "1rem" }}>
            <CardMedia
              id="image"
              square
              style={{
                backgroundImage: `url(${props.image})`
              }}
            >
              <Typography use="caption" theme="textPrimaryOnDark">
                Courtesy of Nasa's APOD API
              </Typography>
            </CardMedia>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default ImageOTD;
