import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// Components
import TopBar from "./components/TopBar/TopBar";
import Landing from "./components/Landing/Landing";
import InfoBar from "./components/InfoBar";
import Footer from "./components/Footer";
import ImageOTD from "./components/ImageOTD/ImageOTD";
import Planets from "./components/Planets/Planets";

import Mercury from "./components/PlanetPages/Mercury";
import Venus from "./components/PlanetPages/Venus";
import Earth from "./components/PlanetPages/Earth";
import Mars from "./components/PlanetPages/Mars";
import Jupiter from "./components/PlanetPages/Jupiter";
import Saturn from "./components/PlanetPages/Saturn";
import Uranus from "./components/PlanetPages/Uranus";
import Neptune from "./components/PlanetPages/Neptune";

// Styles
import { ThemeProvider } from "@rmwc/theme";
import "@material/theme/dist/mdc.theme.css";
import "./App.css";

import ScrollToTop from "./ScrollToTop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=YciADzaLHVWHVGSFgZg93VU9DRiF6F1zapyLfyK9"
      )
      .then(response => {
        this.setState({ imageURL: response.data.url });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { imageURL } = this.state;
    return (
      <ThemeProvider
        options={{
          primary: "rgb(0,0,0,0.5)",
          secondary: "rgb(250, 250, 250)",
          error: "#b00020",
          background: "#212121",
          surface: "rgb(100,100,100, 0)",
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
        <Router>
          <>
            <ScrollToTop>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <TopBar />
                    <Landing />
                    <InfoBar />
                    <Planets />
                    <Footer />
                  </>
                )}
              />
              <Route
                path="/image"
                render={() => (
                  <>
                    <TopBar />
                    <ImageOTD image={imageURL} />
                  </>
                )}
              />
              <Route
                path="/Mercury"
                render={() => (
                  <>
                    <TopBar />
                    <Mercury />
                  </>
                )}
              />
              <Route
                path="/Venus"
                render={() => (
                  <>
                    <TopBar />
                    <Venus />
                  </>
                )}
              />
              <Route
                path="/Earth"
                render={() => (
                  <>
                    <TopBar />
                    <Earth />
                  </>
                )}
              />
              <Route
                path="/Mars"
                render={() => (
                  <>
                    <TopBar />
                    <Mars />
                  </>
                )}
              />
              <Route
                path="/Jupiter"
                render={() => (
                  <>
                    <TopBar />
                    <Jupiter />
                  </>
                )}
              />
              <Route
                path="/Saturn"
                render={() => (
                  <>
                    <TopBar />
                    <Saturn />
                  </>
                )}
              />
              <Route
                path="/Uranus"
                render={() => (
                  <>
                    <TopBar />
                    <Uranus />
                  </>
                )}
              />
              <Route
                path="/Neptune"
                render={() => (
                  <>
                    <TopBar />
                    <Neptune />
                  </>
                )}
              />
            </ScrollToTop>
          </>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
