import React, { Component } from "react";
import {
  Card,
  CardPrimaryAction,
  CardMedia
  // CardActions,
  // CardActionButtons,
  // CardActionButton,
  // CardActionIcons,
  // CardActionIcon
} from "@rmwc/card";
import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

// Styling Imports
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

// Planet Image imports
import Image1 from "../images/space.jpg";
import Image2 from "../images/moon.jpg";
import Image3 from "../images/launch.jpg";
import Image4 from "../images/astro.jpg";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 0,
          image: Image1,
          title: "Our Changing Planet",
          author: "Curt Wagner",
          content: "Visit nine places on our planet."
        },
        {
          id: 1,
          image: Image2,
          title: "Our Planet",
          author: "Chir Agner",
          content: "Visit nine places on our planet."
        },
        {
          id: 2,
          image: Image3,
          title: "Changing Planet",
          author: "Yabai Man",
          content: "The biggest changes today."
        },
        {
          id: 3,
          image: Image4,
          title: "Planet Earth",
          author: "Bobby Marlye",
          content: "Hello from Space."
        }
      ]
    };
  }
  render() {
    const articleItems = this.state.articles.map(article => (
      <GridCell span={6} phone={12}>
        <Card
          style={{
            border: "none",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
            margin: "0 20px 20px 0 "
          }}
        >
          <CardPrimaryAction>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: `url(${article.image})`
              }}
            />
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <Typography use="headline5" tag="h1" theme="textPrimaryOnDark">
                {article.title}
              </Typography>
              <Typography
                use="subtitle2"
                tag="h4"
                theme="textPrimaryOnDark"
                style={{ marginTop: "-1rem" }}
              >
                by {article.author}
              </Typography>
              <Typography use="body2" tag="div" theme="textPrimaryOnDark">
                {article.content}
              </Typography>
            </div>
          </CardPrimaryAction>
        </Card>
      </GridCell>
    ));
    return <Grid>{articleItems}</Grid>;
  }
}
