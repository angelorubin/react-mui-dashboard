import React from "react";
import { render } from "react-dom";
import { App } from "../src/containers/app";
import CssBaseline from "@material-ui/core/CssBaseline";

render(
  <>
    <CssBaseline />
    <App />
  </>,
  document.querySelector("#root")
);
