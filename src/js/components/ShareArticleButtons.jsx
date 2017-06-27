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

const ShareArticleButtons = (props) => {
  const { shareUrl, title } = props;
  return (
    <div className="social-btn">
      <div className="col s2 m2 l2">
        <FacebookShareButton
          url={shareUrl}
          title={title}
          className="share-button">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div className="col s2 m2 l2">
        <GooglePlusShareButton
          url={shareUrl}
          className="share-button">
          <GooglePlusIcon size={32} round />
        </GooglePlusShareButton>
      </div>
      <div className="col s2 m2 l2">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="share-button">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div className="col s2 m2 l2">
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          windowWidth={750}
          windowHeight={600}
          className="share-button">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
      <div className="col s2 m2 l2">
        <RedditShareButton
          url={shareUrl}
          className="share-button">
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
    </div>
  );
};

export default ShareArticleButtons;
