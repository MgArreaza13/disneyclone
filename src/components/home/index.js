import React from "react";
import ImgSlider from "../imgSlider";
import NewDisney from "../newDisney";
import Originals from "../originals";
import Recommends from "../recommends";
import Trending from "../trending";
import Viewers from "../viewers";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

export default Home;
