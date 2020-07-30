// All necessary Imports
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Drawer, DrawerHeader, DrawerContent } from "@rmwc/drawer";
import { List, ListItem, SimpleListItem, CollapsibleList } from "@rmwc/list";
import { Typography } from "@rmwc/typography";

// Component CSS
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import "@rmwc/list/collapsible-list.css";
import "../../App.css";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <Drawer modal id="drawer" open={props.open}>
        <DrawerHeader
          style={{
            padding: "0.4rem 0.9rem",
          }}
        >
          <Logo />
        </DrawerHeader>
        <DrawerContent style={{ padding: "1rem" }}>
          <List
            style={{
              borderTop: "0.5px solid #7fe5f0",
              borderBottom: "0.5px solid #7fe5f0",
            }}
          >
            <ListItem theme="secondary">
              <Link to="/" className="link">
                <Typography
                  use="subtitle1"
                  theme="onPrimary"
                  onClick={props.toggle}
                >
                  Home
                </Typography>
              </Link>
            </ListItem>
            <ListItem theme="secondary">
              <Link to="/image" className="link" onClick={props.toggle}>
                <Typography use="subtitle1" theme="onPrimary">
                  Image of the Day
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/#news" className="link" onClick={props.toggle}>
                <Typography use="subtitle1" theme="secondary">
                  News
                </Typography>
              </Link>
            </ListItem>
            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Planets"
                  metaIcon="chevron_right"
                  theme="secondary"
                />
              }
            >
              <Link to="./mercury" className="link">
                <SimpleListItem
                  text="Mercury"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>
              <Link to="./venus" className="link">
                <SimpleListItem
                  text="Venus"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>
              <Link to="./earth" className="link">
                <SimpleListItem
                  text="Earth"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>
              <Link to="./mars" className="link">
                <SimpleListItem
                  text="Mars"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>
              <Link to="./Jupiter" className="link">
                <SimpleListItem
                  text="Jupiter"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>
              <Link to="./Saturn" className="link">
                <SimpleListItem
                  text="Saturn"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>
              <Link to="./Uranus" className="link">
                <SimpleListItem
                  text="Uranus"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>

              <Link to="./Neptune" className="link">
                <SimpleListItem
                  text="Neptune"
                  theme="secondary"
                  onClick={props.toggle}
                />
              </Link>
            </CollapsibleList>
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Modal;
