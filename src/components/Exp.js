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

import Image from "../images/iu.jpg";

export default class Exp extends Component {
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
    return (
      <Grid>
        <GridCell span={3} phone={12}>
          <Card style={{ width: "12.5rem" }}>
            <CardPrimaryAction>
              <CardMedia
                square
                style={{
                  backgroundImage: `url(${Image})`
                }}
              >
                <CardMediaContent>
                  <Typography
                    use="subtitle2"
                    tag="div"
                    theme="textPrimaryOnDark"
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundImage:
                        "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      position: "absolute"
                    }}
                  >
                    {this.state.articles[1].title}
                  </Typography>
                </CardMediaContent>
              </CardMedia>
            </CardPrimaryAction>
            <CardActions>
              <CardActionIcons>
                <CardActionIcon onIcon="favorite" icon="favorite_border" />
                <CardActionIcon icon="bookmark_border" />
                <CardActionIcon icon="share" />
              </CardActionIcons>
            </CardActions>
          </Card>
        </GridCell>
        ;
      </Grid>
    );
  }
}
