import React, { Component } from "react";
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

import "@material/drawer/dist/mdc.drawer.css";

class TopBar extends Component {
  render() {
    return (
      <div>
        <TopAppBar short>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarNavigationIcon icon="menu" />
              <TopAppBarTitle>Home</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="star" />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
      </div>
    );
  }
}

export default TopBar;
