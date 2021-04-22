import React from "react";
import ImgSlider from "../imgSlider";
import Viewers from "../viewers";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;
