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
import Article from "./components/Article";

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
      imageURL: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2020-02-02&api_key=qKH3s557Kmp2v6v6lR6OoOm709wTaAJKkTA1nkwv"
      )
      .then((response) => {
        this.setState({ imageURL: response.data.url });
      })
      .catch((error) => {
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
          textIconOnDark: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Router>
          <>
            <ScrollToTop>
              <TopBar />
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <Landing />
                    <InfoBar />
                    <Planets />
                  </>
                )}
              />
              <Route path="/article" render={() => <Article />} />
              <Route
                path="/image"
                render={() => <ImageOTD image={imageURL} />}
              />
              <Route path="/Mercury" render={() => <Mercury />} />
              <Route path="/Venus" render={() => <Venus />} />
              <Route path="/Earth" render={() => <Earth />} />
              <Route path="/Mars" render={() => <Mars />} />
              <Route path="/Jupiter" render={() => <Jupiter />} />
              <Route path="/Saturn" render={() => <Saturn />} />
              <Route path="/Uranus" render={() => <Uranus />} />
              <Route path="/Neptune" render={() => <Neptune />} />
              <Footer />
            </ScrollToTop>
          </>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
