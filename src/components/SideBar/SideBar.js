import React from "react";

import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import { MenuSurface, MenuSurfaceAnchor } from "@rmwc/menu";
import "@material/menu/dist/mdc.menu.css";
import "@material/menu-surface/dist/mdc.menu-surface.css";
import "@material/list/dist/mdc.list.css";
import "./SideBar.css";

function SideBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <MenuSurfaceAnchor className="mapMenu">
      <MenuSurface
        anchorCorner="topLeft"
        open={open}
        onClose={evt => setOpen(false)}
      >
        <div>
          <Button label="hello" />
          <Button label="hello" />
          <Button label="hello" />
        </div>
      </MenuSurface>

      <Button
        danger
        label="Hello"
        className="mapButton"
        raised
        onClick={evt => setOpen(!open)}
      />
    </MenuSurfaceAnchor>
  );
}

export default SideBar;
