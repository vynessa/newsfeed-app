import React from 'react';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';


const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook'),
  GooglePlusIcon = generateShareIcon('google'),
  TwitterIcon = generateShareIcon('twitter'),
  LinkedinIcon = generateShareIcon('linkedin'),
  RedditIcon = generateShareIcon('reddit');

const {
  FacebookShareCount,
  TwitterShareCount,
  LinkedinShareCount,
  RedditShareCount,
} = ShareCounts;

// const ShareArticle = () => {

// }

// const ShareArticle = () => {
  
// };

class SocialArticle extends React.Component {
  /**
   * Renders Social Share Buttons
   * 
   */
  render() {
    return (
      <div>
        <>
      </div>
    );
  }
}

export default SocialArticle;
