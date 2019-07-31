import React from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerSubtitle
} from "@rmwc/drawer";
import { List, ListItem } from "@rmwc/list";

import "@material/drawer/dist/mdc.drawer.css";

function Modal(props) {
  return (
    <>
      <Drawer modal open={props.open} onClose={props.toggle}>
        <DrawerHeader>
          <DrawerTitle>DrawerHeader</DrawerTitle>
          <DrawerSubtitle>Subtitle</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem>Cookies</ListItem>
            <ListItem>Pizza</ListItem>
            <ListItem>Icecream</ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Modal;
