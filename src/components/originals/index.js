import React from "react";
import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginals } from "../../features/movies/movieSlice";

function Originals() {
  const movies = useSelector(selectOriginals);

  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => {
            return (
              <Wrap key={key}>
                {movie.id}
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

export default Originals;
