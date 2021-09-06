import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import "./App.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route />
          </React.Fragment>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
