/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  GET_SOCIAL_POSTS_REQUEST,
  GET_SOCIAL_POSTS_SUCCESS,
  GET_SOCIAL_POSTS_FAILURE,
  SELECT_SOCIAL_POST,
  CLOSE_SELECTED_SOCIAL_POST,
  SORT_SOCIAL_POSTS,
} from './actionTypes';

// The initial state of the App
const initialState = fromJS({
  socialPosts: [],
  selectedSocialPostId: '',
  sortKey: '',
  modalState: false,
  loading: false,
  error: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SOCIAL_POSTS_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);

    case GET_SOCIAL_POSTS_SUCCESS:
      return state
        .setIn(['socialPosts'], action.socialPosts)
        .set('loading', false);

    case GET_SOCIAL_POSTS_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false);

    case SELECT_SOCIAL_POST:
      return state
        .set('selectedSocialPostId', action.payload)
        .set('modalState', true);

    case CLOSE_SELECTED_SOCIAL_POST:
      return state
        .set('modalState', false);

    case SORT_SOCIAL_POSTS:
      return state
        .set('sortKey', action.payload);

    default:
      return state;
  }
}

export default appReducer;
