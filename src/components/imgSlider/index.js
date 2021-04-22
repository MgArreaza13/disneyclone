import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./styles";
import carouselImages from "./carousel";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: true,
  };

  const Image = ({ item, key }) => {
    return (
      <Wrap key={key}>
        <a href="">
          <img src={item.path} alt={key} />
        </a>
      </Wrap>
    );
  };

  return (
    <Carousel {...settings}>
      {carouselImages.map((image, index) => {
        return <Image item={image} key={index} />;
      })}
    </Carousel>
  );
}

export default ImgSlider;
