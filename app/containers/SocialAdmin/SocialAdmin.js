/*
 * SocialAdmin
 *
 * List all the Social Posts
 */
import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

import SocialModal from './SocialModal';
import SocialPost from './SocialPost';
import './style.scss';

export default class SocialAdmin extends React.Component {
  componentDidMount() {
    // Load the Social Posts when this form component mounts.
    this.props.action.getSocialPosts();
  }

  render() {
    const {
      action,
      modalState,
      socialPosts,
      selectedSocialPost,
    } = this.props;
    return (
      <div className="social-admin">

        <select onChange={action.sortSocialPosts} >
          <option value="">Sort by:</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="likes">Likes</option>
          <option value="comments">Comments</option>
        </select>

        {modalState &&
          <SocialModal action={action} socialPost={selectedSocialPost} />
        }

        <div className="wrapper">
          { _map(socialPosts, ((socialPost) => (
            <SocialPost key={socialPost.index} action={action} socialData={socialPost} />
          )))}
        </div>

      </div>
    );
  }
}

SocialAdmin.propTypes = {
  action: PropTypes.shape({
    closeSelectedSocialPost: PropTypes.func.isRequired,
    getSocialPosts: PropTypes.func.isRequired,
    selectSocialPost: PropTypes.func.isRequired,
    sortSocialPosts: PropTypes.func.isRequired,
  }).isRequired,
  modalState: PropTypes.bool.isRequired,
  selectedSocialPost: PropTypes.object.isRequired,
  socialPosts: PropTypes.array.isRequired,
};
