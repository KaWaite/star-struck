import React from "react";
import "./landing.css";
import { Typography } from "@rmwc/typography";
import { Icon } from "@rmwc/icon";

import "@rmwc/icon/icon.css";

function Landing() {
  return (
    <div id="landing">
      <div id="dialog">
        <Typography use="headline2" id="title">
          Star Struck{" "}
        </Typography>
        <Typography use="headline5" id="subtitle">
          A space in time that you won't want to miss...
        </Typography>
      </div>

      <a data-scroll id="scroll" href="#news" style={{ margin: "auto" }}>
        <Icon
          icon={{ icon: "keyboard_arrow_down", size: "large" }}
          theme={["onPrimary"]}
        />
      </a>
    </div>
  );
}

export default Landing;
