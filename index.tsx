import React, { Component } from "react";
import { render } from "react-dom";
import { LoginPage } from "./pages";

import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

render(<App />, document.getElementById("root"));
