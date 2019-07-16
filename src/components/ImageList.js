import React, { Component } from "react";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon
} from "@rmwc/card";
import { Grid, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

// Styling Imports
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

// Planet Image imports
import Image1 from "../images/iu.jpg";
import Image2 from "../images/iu2.jpg";
import Image3 from "../images/mercury2.gif";
import Image4 from "../images/iu.jpg";
import Image5 from "../images/iu2.jpg";

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
          content:
            "Visit nine places on our planet that are undergoing the biggest changes today."
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
        },
        {
          id: 4,
          image: Image5,
          title: "Mars: a love story",
          author: "Nick Spark",
          content: "The notebook was my only success."
        }
      ]
    };
  }
  render() {
    const articleItems = this.state.articles.map(article => (
      <GridCell span={4} phone={12}>
        <Card
          style={{
            border: "none",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)"
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
              <Typography use="headline6" tag="h2" theme="textPrimaryOnDark">
                {article.title}
              </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="textPrimaryOnDark"
                style={{ marginTop: "-1rem" }}
              >
                by {article.author}
              </Typography>
              <Typography
                mdc-typography-overflow-ellipsis
                use="body1"
                tag="div"
                theme="textPrimaryOnDark"
              >
                {article.content}
              </Typography>
            </div>
          </CardPrimaryAction>
          <CardActions>
            <CardActionButtons>
              <CardActionButton theme="textPrimaryOnDark">
                Read More..
              </CardActionButton>
              {/* <CardActionButton>Bookmark</CardActionButton> */}
            </CardActionButtons>
            <CardActionIcons>
              <CardActionIcon
                theme="textPrimaryOnDark"
                onIcon="favorite"
                icon="favorite_border"
              />
              {/* <CardActionIcon icon="share" />
              <CardActionIcon icon="more_vert" /> */}
            </CardActionIcons>
          </CardActions>
        </Card>
      </GridCell>
    ));
    return <Grid>{articleItems}</Grid>;
  }
}
