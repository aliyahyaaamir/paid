/**
 * Placeholder
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class SocialPost extends React.PureComponent {
  render() {
    const {
      action,
      socialData,
    } = this.props;

    return (
      <div>
        <button onClick={action.selectSocialPost}>
          <img name={socialData.index} src={socialData.picture} alt="placeholder-box" width="70%" height="70%" />
          <p>{socialData.user.name}</p>
        </button>
      </div>
    );
  }
}

SocialPost.propTypes = {
  action: PropTypes.shape({
    selectSocialPost: PropTypes.func.isRequired,
  }).isRequired,
  socialData: PropTypes.object.isRequired,
};
