import React from "react";
import ReactDOM from "react-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let theme = createTheme({
  typography: {
    fontFamily: "'Fira Sans Extra Condensed', sans-serif",
    fontSize: 16,
    fontWeightLight: 100,
    fontWeightMedium: 400,
    fontWeightBold: 700
  }
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
