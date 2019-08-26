import React from 'react';

import { User } from '../UserTypes';
import { UserContainer, UserIcon } from './UserMenuStyles';

interface Props {
  user?: User;
  fetchUser: () => void;
}

interface State {
  isOpen: boolean;
}

class UserMenu extends React.Component<Props, State> {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  toggleMenu = () => this.setState({
    isOpen: !this.state.isOpen
  });

  renderMenu = () => (
    <ul>
      <li>Edit Profile</li>
      <li>Logout</li>
    </ul>
  );

  render() {
    const { user } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        {user
          ? (
            <UserContainer>
              <h3>{user.name}</h3>
              <UserIcon imageUrl={user.image} onClick={this.toggleMenu} />
              {isOpen && this.renderMenu()}
            </UserContainer>
          )
          : <p>No user!</p>
        }
      </div>
    );
  }
}

export default UserMenu;
