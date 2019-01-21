/**
 * SocialModal
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import _map from 'lodash/map';

import 'containers/SocialAdmin/style.scss';

const styles = {
  div1: {
    width: '40%',
    float: 'left'
  },
  div2: {
    width: '40%',
    float: 'right'
  },
};

export default class SocialModal extends React.PureComponent {
  render() {
    const {
      action,
      socialPost,
    } = this.props;

    return (

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={action.closeSelectedSocialPost} >&times;</span>
          <div style={styles.div1}>
            <img src={socialPost.picture} alt="placeholder-box" />
          </div>
          <div style={styles.div2}>
            <p>Number of likes {socialPost.likes}</p>
            <p>Number of comments {socialPost.comments}</p>
            <p>User {socialPost.user.name}</p>
            <p>Gender {socialPost.user.gender}</p>
            <p>Age {socialPost.user.age}</p>
            <p>Email {socialPost.user.email}</p>
            <p>Address {socialPost.user.address}</p>
            <b>Tags </b>
            { _map(socialPost.tags, ((value, index) => (
              <a key={index} href="">#{value} </a>
            )))}
          </div>
        </div>
      </div>

    );
  }
}

SocialModal.propTypes = {
  action: PropTypes.shape({
    closeSelectedSocialPost: PropTypes.func.isRequired,
  }).isRequired,
  socialPost: PropTypes.object.isRequired,
};
