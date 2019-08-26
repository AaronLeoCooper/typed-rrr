import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import UserMenuContainer from '../../User/UserMenu/UserMenuContainer';
import { Header } from './PageHeaderStyles';

type Props = RouteComponentProps;

const PageHeader: React.FC<Props> = ({ location }) => (
  <Header>
    <div>
      <h2>You're at: {location.pathname}</h2>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About</Link>
    </div>
    <UserMenuContainer />
  </Header>
);

export default withRouter(PageHeader);
