import React from "react";
import { LoginCard } from "../components";

const LoginPage = props => {
  return (
    <div>
      <LoginCard {...props}/>
    </div>
  );
};

export { LoginPage };
