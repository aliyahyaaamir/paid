/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 */

import {
  GET_SOCIAL_POSTS_REQUEST,
  GET_SOCIAL_POSTS_SUCCESS,
  GET_SOCIAL_POSTS_FAILURE,
  SELECT_SOCIAL_POST,
  CLOSE_SELECTED_SOCIAL_POST,
  SORT_SOCIAL_POSTS,
} from './actionTypes';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function getSocialPostsRequest() {
  return {
    type: GET_SOCIAL_POSTS_REQUEST,
  };
}

export function getSocialPostsSuccess(socialPosts) {
  return {
    type: GET_SOCIAL_POSTS_SUCCESS,
    socialPosts,
  };
}

export function getSocialPostsFailure(error) {
  return {
    type: GET_SOCIAL_POSTS_FAILURE,
    error,
  };
}

export function selectSocialPost(e) {
  return {
    type: SELECT_SOCIAL_POST,
    payload: e.target.name,
  };
}

export function closeSelectedSocialPost() {
  return {
    type: CLOSE_SELECTED_SOCIAL_POST,
  };
}

export function sortSocialPosts(e) {
  return {
    type: SORT_SOCIAL_POSTS,
    payload: e.target.value,
  };
}
