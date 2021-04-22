import React from "react";
import { Container, Content, Wrap } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movies/movieSlice";

function Recommends() {
  const movies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for you</h4>
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

export default Recommends;
