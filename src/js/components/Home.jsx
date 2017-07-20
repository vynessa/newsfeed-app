import React from 'react';
import { Slider, Slide } from 'react-materialize';
import images from './Images.jsx';

/**
 * @description Home component which contains slider and slide images for the landing page
 * @function Home
 */
const Home = () => {
  /**
   * @description Returns JSX Home page Component
   * @returns {JSX.Element} Home
   * @memberof Home
   */
  const bool = true;
  return (
    <Slider className="slider fullscreen"
      indicators={bool}
      interval={6000}>
      <Slide
        src={images.business.image}
        title={images.business.title}>
        {images.business.text}
      </Slide>
      <Slide
        src={images.whatsNew.image}
        title={images.whatsNew.title}
        placement="left">
        {images.whatsNew.text}
      </Slide>
      <Slide
        src={images.theGoodNews.image}
        title={images.theGoodNews.title}
        placement="right">
        {images.theGoodNews.text}
      </Slide>
      <Slide
        src={images.newsWallpaper.image}
        title={images.newsWallpaper.title}
        placement="right">
        {images.newsWallpaper.text}
      </Slide>
    </Slider>
  );
};

export default Home;
