import React from "react";
import { Typography } from "@rmwc/typography";
import { Card, CardPrimaryAction, CardMedia } from "@rmwc/card";

import Mercury from "../../images/small_images/484px-Mercury.jpg";

import "@material/typography/dist/mdc.typography.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

export default function InfoBar() {
  return (
    <div
      style={{ height: "100vh", alignItems: "center", position: "relative" }}
    >
      <div
        style={{
          background: "rgba(250,250,250,0.8)",
          position: "absolute",
          top: "10vh",
          height: "75vh"
        }}
      >
        <Card
          style={{
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 1)",
            margin: "1.5rem",
            width: "19rem",
            float: "right"
          }}
        >
          <CardMedia
            square
            style={{
              backgroundImage: `url(${Mercury})`
            }}
          />
        </Card>
        <div style={{ width: "85%", margin: "auto", padding: "7rem 6rem" }}>
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
            Mercury
          </Typography>
          <Typography use="body1">
            This is going to be the description of the planet.This is going to
            be the description of the planet.This is going to be the description
            of the planet.This is going to be the description of the planet.This
            is going to be the description of the planet.This is going to be the
            description of the planet.This is going to be the description of the
            planet.This is going to be the description of the planet.This is
            going to be the description of the planet.
            <br />
            <br />
            This is going to be the description of the planet.This is going to
            be the description of the planet.This is going to be the description
            of the planet.This is going to be the description of the planet.This
            is going to be the description of the planet.This is going to be the
            description of the planet.
          </Typography>
        </div>
      </div>
    </div>
  );
}
