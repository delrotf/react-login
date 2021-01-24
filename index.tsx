import React from "react";
import { render } from "react-dom";
import { LoginPage } from "./pages";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.scss";

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
