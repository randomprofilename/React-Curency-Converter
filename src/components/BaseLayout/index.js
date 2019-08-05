import React from "react";
import NavBar from "./NavBar";
import Router from "./Router";
import { Container } from "semantic-ui-react";

const BaseLayout = () => (
    <>
      <Container>
        <NavBar />
        <Router/>
      </Container>
    </>
  );

  export default BaseLayout;