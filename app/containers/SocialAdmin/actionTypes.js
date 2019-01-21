/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

/**
 * The index of all Redux Actions used by the system.
 */

export const GET_SOCIAL_POSTS_REQUEST = 'GET_SOCIAL_POSTS_REQUEST';
export const GET_SOCIAL_POSTS_SUCCESS = 'GET_SOCIAL_POSTS_SUCCESS';
export const GET_SOCIAL_POSTS_FAILURE = 'GET_SOCIAL_POSTS_FAILURE';

export const SELECT_SOCIAL_POST = 'SELECT_SOCIAL_POST';
export const CLOSE_SELECTED_SOCIAL_POST = 'CLOSE_SELECTED_SOCIAL_POST';

export const SORT_SOCIAL_POSTS = 'SORT_SOCIAL_POSTS';

