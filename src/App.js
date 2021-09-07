import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import "./App.css";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route />
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
