import React, { useContext, useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginContext } from "../context";

const HomePage = props => {
  const { firstname, authenticated } = useContext(LoginContext);

  useEffect(() => {
    if (!authenticated) {
      props.history.push('/')
    }
  }, [authenticated])

  return (
    <div>
      <Jumbotron>
        <h1>Hello, {firstname}!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </div>
  );
};

export { HomePage };
