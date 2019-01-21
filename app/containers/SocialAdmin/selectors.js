/**
 * selectors
 */

import Immutable from 'immutable';
import { createSelector } from 'reselect';

const selectedSocialPostIdSelector = (state) => state.getIn(['home', 'selectedSocialPostId'], '');
const socialPostsSelector = (state) => state.getIn(['home', 'socialPosts'], Immutable.List());
const socialPostsSortKeySelector = (state) => state.getIn(['home', 'sortKey'], '');

const selectedSocialPostSelector = createSelector(
  [selectedSocialPostIdSelector, socialPostsSelector],
  (selectedSocialPostId, socialPosts) => socialPosts.get(selectedSocialPostId, Immutable.Map())
);

const sortedSocialPostsSelector = createSelector(
  [socialPostsSelector, socialPostsSortKeySelector],
  (socialPosts, sortKey) => {
    if (sortKey === 'name') {
      return socialPosts.sort((post1, post2) => (
        String(post1.get('user').get('name')).localeCompare(String(post2.get('user').get('name')))
      ));
    } else if (sortKey === 'age') {
      return socialPosts.sort((post1, post2) => (
        post1.get('user').get('age') < post2.get('user').get('age') ? 1 : -1
      ));
    } else if (sortKey === 'likes') {
      return socialPosts.sort((post1, post2) => (
        post1.get('likes') < post2.get('likes') ? 1 : -1
      ));
    } else if (sortKey === 'comments') {
      return socialPosts.sort((post1, post2) => (
        post1.get('comments') < post2.get('comments') ? 1 : -1
      ));
    }

    return socialPosts;
  }
);

export {
  selectedSocialPostSelector,
  sortedSocialPostsSelector,
};
