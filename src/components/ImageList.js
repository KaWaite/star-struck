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
import "@material/layout-grid/dist/mdc.layout-grid.css";
import { Typography } from "@rmwc/typography";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 0,
          title: "Our Changing Planet",
          author: "Curt Wagner",
          content:
            "Visit nine places on our planet that are undergoing the biggest changes today."
        },
        {
          id: 1,
          title: "Our Planet",
          author: "Chir Agner",
          content: "Visit nine places on our planet."
        },
        {
          id: 2,
          title: "Changing Planet",
          author: "Yabai Man",
          content: "The biggest changes today."
        },
        {
          id: 3,
          title: "Planet Earth",
          author: "Bobby Marlye",
          content: "Hello from Space."
        },
        {
          id: 4,
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
        <Card style={{ backgroundColor: "rgb(255, 255, 255)" }}>
          <CardPrimaryAction>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: "url(../images/iu.jpg)"
              }}
            />
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <Typography use="headline6" tag="h2">
                {article.title}
              </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="textSecondaryOnBackground"
                style={{ marginTop: "-1rem" }}
              >
                by {article.author}
              </Typography>
              <Typography
                mdc-typography-overflow-ellipsis
                use="body1"
                tag="div"
                theme="textSecondaryOnBackground"
              >
                {article.content}
              </Typography>
            </div>
          </CardPrimaryAction>
          <CardActions>
            <CardActionButtons>
              <CardActionButton>Read More..</CardActionButton>
              {/* <CardActionButton>Bookmark</CardActionButton> */}
            </CardActionButtons>
            <CardActionIcons>
              <CardActionIcon onIcon="favorite" icon="favorite_border" />
              {/* <CardActionIcon icon="share" />
              <CardActionIcon icon="more_vert" /> */}
            </CardActionIcons>
          </CardActions>
        </Card>
      </GridCell>
    ));
    return (
      <div>
        <Grid>{articleItems}</Grid>
      </div>
    );
  }
}
