/**
 *
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { getSocialPostsSuccess, getSocialPostsFailure } from 'containers/SocialAdmin/actions';
import { socialPostIndex } from 'lib/api/socialPostEndpoint';
import { GET_SOCIAL_POSTS_REQUEST } from './actionTypes';

function* getSocialPosts() {
  try {
    const socialPosts = yield call(socialPostIndex);
    yield put(getSocialPostsSuccess(socialPosts));
  } catch (error) {
    yield put(getSocialPostsFailure(error));
  }
}

export default function* watchGetMonetizationTypeListRequest() {
  yield takeLatest(GET_SOCIAL_POSTS_REQUEST, getSocialPosts);
}
