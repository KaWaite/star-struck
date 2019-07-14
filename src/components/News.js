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
      <Card outlined style={{ margin: "10px 20px", backgroundColor: "rgba" }}>
        <Typography
          use="headline6"
          tag="div"
          style={{ padding: "0.5rem 1rem" }}
          theme="textSecondaryOnBackground"
        >
          Space News
        </Typography>

        <ListDivider />

        <CardPrimaryAction>
          <div style={{ padding: "1rem" }}>
            <Typography use="headline5" tag="div">
              Copper on the rise
            </Typography>
            <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
              Copper price soars amid global market optimism and increased
              demand.
            </Typography>
          </div>
        </CardPrimaryAction>

        <ListDivider />

        <CardPrimaryAction>
          <div style={{ padding: "1rem" }}>
            <Typography use="headline5" tag="div">
              U.S. tech startups rebound
            </Typography>
            <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
              Favorable business conditions have allowed startups to secure more
              fundraising deals compared to last year.
            </Typography>
          </div>
        </CardPrimaryAction>

        <ListDivider />

        <CardPrimaryAction>
          <div style={{ padding: "1rem" }}>
            <Typography use="headline5" tag="div">
              Asia's clean energy ambitions
            </Typography>
            <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
              China plans to invest billions of dollars for the development of
              over 300 clean energy projects in Southeast Asia.
            </Typography>
          </div>
        </CardPrimaryAction>

        <ListDivider />

        <CardActions fullBleed>
          <CardActionButton
            label="All Business Headlines"
            trailingIcon="arrow_forward"
          />
        </CardActions>
      </Card>
    );
  }
}
