import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import wrapComponent from 'utils/ComponentWrapper';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import {
  selectedSocialPostSelector,
  sortedSocialPostsSelector,
} from './selectors';
import SocialAdmin from './SocialAdmin';

import {
  getSocialPostsRequest,
  closeSelectedSocialPost,
  selectSocialPost,
  sortSocialPosts,
} from './actions';

const mapStateToProps = (state) => ({
  modalState: state.getIn(['home', 'modalState'], false),
  socialPosts: sortedSocialPostsSelector(state),
  selectedSocialPost: selectedSocialPostSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({
    getSocialPosts: getSocialPostsRequest,
    closeSelectedSocialPost,
    selectSocialPost,
    sortSocialPosts,
  }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(wrapComponent(SocialAdmin));
export { mapDispatchToProps };
