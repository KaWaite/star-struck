import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RMWCProvider } from "@rmwc/provider";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <RMWCProvider
    // Global options
    ripple={true}
  >
    <App />
  </RMWCProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
