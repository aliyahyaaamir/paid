/**
 * Model definition for SocialPost.
 */

import Immutable from 'immutable';

const User = new Immutable.Record({
  name: '',
  gender: '',
  age: '',
  email: '',
  phone: '',
  address: '',
  registered: ''
});

const SocialPost = new Immutable.Record({
  _id: '',
  index: '',
  guid: '',
  picture: '',
  likes: '0',
  comments: '0',
  tags: Immutable.List(),
  user: new User(),
});

/**
 * Maps the JSON returned from a remote request onto a new SocialPost record.
 * @param {Object} json
 */
export const fromResponse = (json) => new SocialPost({
  ...json,
  tags: Immutable.fromJS(json.tags),
  user: new User(json.user)
});

export default SocialPost;
