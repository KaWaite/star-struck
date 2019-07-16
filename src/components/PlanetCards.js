import React, { Component } from "react";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardMediaContent,
  CardActions,
  CardActionIcon,
  CardActionIcons
} from "@rmwc/card";
import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

// Image Imports
import Mercury from "../images/small_images/484px-Mercury.jpg";
import Venus from "../images/small_images/venus.jpg";
import Earth from "../images/small_images/483px-Earth.png";
import Mars from "../images/small_images/480px-Mars.jpg";
import Jupiter from "../images/small_images/Jupiter.jpg";
import Saturn from "../images/small_images/640px-Saturn.jpg";
import Uranus from "../images/small_images/480px-Uranus.jpg";
import Neptune from "../images/small_images/480px-Neptune.jpg";

export default class Exp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          id: 1,
          name: "Mercury",
          image: Mercury
        },
        {
          id: 2,
          name: "Venus",
          image: Venus
        },
        {
          id: 3,
          name: "Earth",
          image: Earth
        },
        {
          id: 4,
          name: "Mars",
          image: Mars
        },
        {
          id: 5,
          name: "Jupiter",
          image: Jupiter
        },
        {
          id: 6,
          name: "Saturn",
          image: Saturn
        },
        {
          id: 7,
          name: "Uranus",
          image: Uranus
        },
        {
          id: 8,
          name: "Neptune",
          image: Neptune
        }
      ]
    };
  }
  render() {
    const planets = this.state.planets.map(planet => (
      <GridCell span={3} phone={12}>
        <Card
          style={{
            width: "12.5rem",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 1)",
            margin: "1rem"
          }}
        >
          <CardPrimaryAction>
            <CardMedia
              square
              style={{
                backgroundImage: `url(${planet.image})`
              }}
            >
              <CardMediaContent>
                <Typography
                  use="headline6"
                  tag="div"
                  theme="textPrimaryOnDark"
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundImage:
                      "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    position: "absolute",
                    fontWeight: "bold"
                  }}
                >
                  {planet.name}
                </Typography>
              </CardMediaContent>
            </CardMedia>
          </CardPrimaryAction>
          {/* <CardActions>
            <CardActionIcons>
              <CardActionIcon onIcon="favorite" icon="favorite_border" />
              <CardActionIcon icon="bookmark_border" />
              <CardActionIcon icon="share" />
            </CardActionIcons>
          </CardActions> */}
        </Card>
      </GridCell>
    ));
    return <>{planets}</>;
  }
}
