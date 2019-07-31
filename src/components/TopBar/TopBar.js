import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarActionItem
  // TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
// import SideBar from "./SideBar/SideBar";

import Modal from "../Modal";

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
              <Link to="/" style={{ textDecoration: "none" }}>
                <TopAppBarTitle>Home</TopAppBarTitle>
              </Link>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <Link to="/image" style={{ textDecoration: "none" }}>
                <TopAppBarActionItem icon="file_download" />
              </Link>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
    );
  }
}

export default TopBar;
