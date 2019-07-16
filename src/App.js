import React from "react";
import TopBar from "./components/TopBar";
import Landing from "./components/Landing/Landing";
import InfoBar from "./components/InfoBar";
import Footer from "./components/Footer";

import Planets from "./components/Planets";
import SideBar from "./components/SideBar/SideBar";
import { ThemeProvider } from "@rmwc/theme";
import "@material/theme/dist/mdc.theme.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider
      options={{
        primary: "rgb(0,0,0,0.5)",
        secondary: "rgb(250, 250, 250)",
        error: "#b00020",
        background: "#212121",
        surface: "rgb(100,100,100, 0.1)",
        onPrimary: "rgba(255,255,255,.87)",
        onSecondary: "rgba(0,0,0,0.87)",
        onSurface: "rgba(255,255,255,.87)",
        onError: "#fff",
        textPrimaryOnBackground: "rgba(255, 255, 255, 1)",
        textSecondaryOnBackground: "rgba(255, 255, 255, 0.7)",
        textHintOnBackground: "rgba(255, 255, 255, 0.5)",
        textDisabledOnBackground: "rgba(255, 255, 255, 0.5)",
        textIconOnBackground: "rgba(255, 255, 255, 0.5)",
        textPrimaryOnLight: "rgba(0, 0, 0, 0.87)",
        textSecondaryOnLight: "rgba(0, 0, 0, 0.54)",
        textHintOnLight: "rgba(0, 0, 0, 0.38)",
        textDisabledOnLight: "rgba(0, 0, 0, 0.38)",
        textIconOnLight: "rgba(0, 0, 0, 0.38)",
        textPrimaryOnDark: "rgba(250,250,250,0.8)",
        textSecondaryOnDark: "rgba(255, 255, 255, 0.7)",
        textHintOnDark: "rgba(255, 255, 255, 0.5)",
        textDisabledOnDark: "rgba(255, 255, 255, 0.5)",
        textIconOnDark: "rgba(255, 255, 255, 0.5)"
      }}
    >
      <div className="App">
        {/* <SideBar /> */}
        <TopBar />
        <Landing />
        <InfoBar />
        <Planets />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
