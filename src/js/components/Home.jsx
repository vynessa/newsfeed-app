import React from 'react';
import { Slider, Slide } from 'react-materialize';
import Images from '../utils/images';

/**
 * @description Home component which contains slider and slide images for the landing page
 * @function Home
 * @returns {object} Home
 */
const Home = () => {
  /**
   * @description Returns JSX Home page Component
   * @returns {JSX.Element} Home
   * @memberof Home
   */
  const allImages = Images.map((image, index) => {
    return <Slide
        key={index}
        src={image.image}
        title={image.title}>
        {image.text}</Slide>;
  });

  return (
    <Slider className="slider fullscreen">
      {allImages}
    </Slider>
  );
};


export default Home;

