import React from "react";
import { Container } from "react-bootstrap";
import WelcomeBanner from "./sections/WelcomeBanner";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Relax from "./sections/Relax";

const App = () => {
  return (
    <Container>
      <WelcomeBanner />
      <Skills />
      <Projects />
      <Relax />
    </Container>
  );
};

export default App;
