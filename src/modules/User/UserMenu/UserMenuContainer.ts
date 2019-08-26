import { connect } from 'react-redux';

import { RootState } from '../../../store';

import { fetchUser, getUser } from '../UserRedux';
import UserMenu from './UserMenu';

export default connect(
  (rootState: RootState) => ({
    user: getUser(rootState)
  }),
  { fetchUser }
)(UserMenu);
