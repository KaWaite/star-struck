import React, { Component } from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  // TopAppBarTitle,
  TopAppBarActionItem
  // TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
// import SideBar from "./SideBar/SideBar";

import Modal from "../Modal/Modal";

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
              <TopAppBarNavigationIcon icon="toll" onClick={this.toggle} />
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
