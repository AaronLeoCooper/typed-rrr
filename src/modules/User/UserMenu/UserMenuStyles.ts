import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

interface UserIconProps {
  imageUrl: string;
}

export const UserIcon = styled.div<UserIconProps>`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: solid 3px #fff;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;
