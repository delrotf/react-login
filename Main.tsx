import React from "react";
import { LoginPage } from "./pages";
import { Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

const Main = props => {
  return (
    <div>
      <Route path="/" exact component={LoginPage} />
      <Route path="/home" exact component={HomePage} />
    </div>
  );
};

export { Main };
