// API imports
import React from "react";
import { Typography } from "@rmwc/typography";
import { Card, CardMedia } from "@rmwc/card";
import { Elevation } from "@rmwc/elevation";

// Image import
import Uranus from "../../images/large_images/Uranus_large.jpg";

// CSS
import "./PlanetPage.css";
import "../../globalStyles/Card.css";
import "../../globalStyles/Typography.css";

// RMWC CSS
import "@material/typography/dist/mdc.typography.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/elevation/dist/mdc.elevation.css";

export default function InfoBar() {
  return (
    <div className="planet-container">
      <div
        className="planet-background"
        style={{
          backgroundImage: `url(${Uranus})`
        }}
      />
      <Elevation z={4} key={5} className="planet-content">
        <Card className="card">
          <CardMedia
            square
            style={{
              backgroundImage: `url(${Uranus})`
            }}
          />
        </Card>
        <div className="card-content">
          <Typography use="headline2" className="header-underlined">
            Uranus
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
      </Elevation>
    </div>
  );
}
