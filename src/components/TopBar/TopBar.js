import React, { Component } from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem
} from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import { Button } from "@rmwc/button";

import Modal from "../Modal/Modal";
import Logo from "../Logo";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(state => {
      return { open: !state.open };
    });
  }
  render() {
    return (
      <div>
        <Modal open={this.state.open} toggle={this.toggle} />
        <TopAppBar short dense>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <Button onClick={this.toggle}>
                <Logo />
              </Button>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="file_download" />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
    );
  }
}

export default TopBar;
