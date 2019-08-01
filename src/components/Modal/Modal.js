// All necessary Imports
import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent
  // DrawerSubtitle
} from "@rmwc/drawer";
import { List, ListItem, SimpleListItem, CollapsibleList } from "@rmwc/list";
import { Typography } from "@rmwc/typography";

// Component CSS
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import "@rmwc/list/collapsible-list.css";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <Drawer
        modal
        id="drawer"
        open={props.open}
        onClose={props.toggle}
        style={{ padding: "1rem" }}
      >
        <DrawerHeader>
          <DrawerTitle
            style={{
              borderBottom: "0.5px #7fe5f0 solid",
              paddingBottom: "0.5rem",
              marginBottom: "1rem"
            }}
            theme="secondary"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography use="headline5" theme="onPrimary">
                Star Struck
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
              <Link to="/#news" style={{ textDecoration: "none" }}>
                <Typography use="subtitle1" theme="secondary">
                  News
                </Typography>
              </Link>
            </ListItem>
            <List>
              <CollapsibleList
                handle={
                  <SimpleListItem
                    text="Planets"
                    metaIcon="chevron_right"
                    theme="secondary"
                  />
                }
                onOpen={() => console.log("open")}
                onClose={() => console.log("close")}
              >
                <Link to="./planet" style={{ textDecoration: "none" }}>
                  <SimpleListItem text="Mercury" theme="secondary" />
                </Link>

                <SimpleListItem text="Venus" theme="secondary" />
                <SimpleListItem text="Earth" theme="secondary" />
                <SimpleListItem text="Mars" theme="secondary" />
                <SimpleListItem text="Jupiter" theme="secondary" />
                <SimpleListItem text="Saturn" theme="secondary" />
                <SimpleListItem text="Uranus" theme="secondary" />
                <SimpleListItem text="Neptune" theme="secondary" />
              </CollapsibleList>
            </List>
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Modal;
