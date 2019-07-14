import React from "react";
import TopBar from "./components/TopBar";
import Landing from "./components/Landing/Landing";
import InfoBar from "./components/InfoBar";
import SideBar from "./components/SideBar/SideBar";
import { ThemeProvider } from "@rmwc/theme";
import "@material/theme/dist/mdc.theme.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider
      options={{
        primary: "rgb(0, 0, 0, 0.5)",
        secondary: "rgb(250, 250, 250)",
        background: "rgb(0,0,0)",
        textPrimaryOnDark: "rgb(250,250,250)"
      }}
    >
      <div className="App">
        {/* <SideBar /> */}
        <TopBar />
        <Landing />
        <InfoBar />;
      </div>
    </ThemeProvider>
  );
}

export default App;
