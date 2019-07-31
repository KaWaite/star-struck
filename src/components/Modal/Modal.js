import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent
  // DrawerSubtitle
} from "@rmwc/drawer";
import { List, ListItem } from "@rmwc/list";
import { Typography } from "@rmwc/typography";

import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <Drawer
        modal
        open={props.open}
        onClose={props.toggle}
        theme="background"
        style={{ padding: "1rem" }}
      >
        <DrawerHeader>
          <DrawerTitle
            style={{
              borderBottom: "0.5px #7fe5f0 solid"
            }}
            theme="secondary"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography use="headline5" theme="onPrimary">
                Home
              </Typography>
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem theme="secondary">
              <Link to="/image" style={{ textDecoration: "none" }}>
                <Typography use="subtitle1" theme="onPrimary">
                  Image of the Day
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Typography use="subtitle1" theme="secondary">
                News
              </Typography>
            </ListItem>
            <ListItem>
              <Typography use="subtitle1" theme="secondary">
                Planets
              </Typography>
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Modal;
