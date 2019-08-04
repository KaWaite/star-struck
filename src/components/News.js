import React, { Component } from "react";
import {
  Card,
  CardPrimaryAction,
  CardActions,
  CardActionButton
} from "@rmwc/card";
import { ListDivider } from "@rmwc/list";
import { Typography } from "@rmwc/typography";

import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

export default class News extends Component {
  render() {
    return (
      <Card
        style={{
          marginRight: "80px"
        }}
      >
        <Typography
          use="headline5"
          tag="div"
          theme="textPrimaryOnDark"
          style={{
            padding: "0.5rem 1rem",
            fontWeight: "bold"
          }}
        >
          latest
        </Typography>

        <ListDivider />

        <CardPrimaryAction>
          <div style={{ padding: "1rem" }}>
            <Typography theme="textPrimaryOnDark" use="headline5" tag="div">
              SpaceX To The Rescue
            </Typography>
            <Typography use="body1" tag="p" theme="textPrimaryOnDark">
              Elon Musk is coming to the rescue at SpaceX. Learn More.
            </Typography>
          </div>
        </CardPrimaryAction>

        <ListDivider />

        <CardPrimaryAction>
          <div style={{ padding: "1rem" }}>
            <Typography use="headline5" tag="div" theme="textPrimaryOnDark">
              U.S. Space tech startups on the rise
            </Typography>
            <Typography use="body1" tag="p" theme="textPrimaryOnDark">
              Favorable space business conditions have allowed startups to
              secure more fundraising deals compared to last year.
            </Typography>
          </div>
        </CardPrimaryAction>

        <ListDivider />

        <CardPrimaryAction>
          <div style={{ padding: "1rem" }}>
            <Typography use="headline5" tag="div" theme="textPrimaryOnDark">
              Asia's clean energy ambitions for Space
            </Typography>
            <Typography use="body1" tag="p" theme="textPrimaryOnDark">
              China plans to invest billions of dollars for the development of
              over 300 clean energy projects in Southeast Asia for space.
            </Typography>
          </div>
        </CardPrimaryAction>

        <ListDivider />

        <CardActions fullBleed>
          <CardActionButton
            label="All Business Headlines"
            trailingIcon="arrow_forward"
            theme="textPrimaryOnDark"
          />
        </CardActions>
      </Card>
    );
  }
}
