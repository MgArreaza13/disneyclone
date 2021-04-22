import React from "react";
import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../features/movies/movieSlice";

function NewDisney() {
  const movies = useSelector(selectNewDisney);

  return (
    <Container>
      <h4>New to Disney+</h4>
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

export default NewDisney;
