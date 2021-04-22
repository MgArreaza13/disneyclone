import React from "react";
import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";

function Trending() {
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-marvel.png" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-marvel.png" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-marvel.png" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-marvel.png" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Trending;
