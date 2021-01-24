import React from "react";
import { LoginPage } from "./pages";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div>
    <Route path="/asdf" exact render={() => <LoginPage />} />
     <Route path="/af" exact render={() => <LoginPage />} />
     </div>
     )
};
