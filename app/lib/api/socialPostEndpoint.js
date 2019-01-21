import Immutable from 'immutable';

import { getRequest } from 'lib/ajax';

import { fromResponse as socialPostFromResponse } from 'model/SocialPost';

export const socialPostIndex = () => (
  getRequest('http://localhost:5000/socialPost')
    .then((socialPosts) => (
      Immutable.List(socialPosts.map(socialPostFromResponse))
    ))
);
