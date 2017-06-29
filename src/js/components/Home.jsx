import React from 'react';
import { Slider, Slide } from 'react-materialize';
import business from '../../../public/img/business-man-1031755_1920-1080x675.jpg';
import whatsNew from '../../../public/img/whats-new.jpg';
import theGoodNews from '../../../public/img/the-good-news.jpg';
import newsWallpaper from '../../../public/img/newspaper-wallpaper.jpg';

/**
 * 
 * 
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {
  /**
   * 
   * 
   * @returns 
   * @memberof Home
   */
  render() {
    return (
      <Slider className="slider fullscreen">
        <Slide
          src={business}
          title="Latest News feeds from...">
          View Latest feeds from different Sources
        </Slide>
        <Slide
          src={whatsNew}
          title="Check out what's new on the news today"
          placement="left">
          Login to access the Latest gist
        </Slide>
        <Slide
          src={theGoodNews}
          title="Get the latest news on the fly"
          placement="right">
          Both good and bad
        </Slide>
        <Slide
          src={newsWallpaper}
          title="Explore different news categories..."
          placement="right">
          From Business news to Sports, Fashion, Music...
        </Slide>
      </Slider>
    );
  }
}

export default Home;
