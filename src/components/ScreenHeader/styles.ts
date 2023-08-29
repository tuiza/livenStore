import styled from 'styled-components/native';
import theme from '../../global/theme';
import LikeButton from 'components/LikeButton';

const {colors} = theme;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 5px;
`;

export const Header = styled.View<{backgroundWhite: boolean}>`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
  background-color: ${props =>
    props.backgroundWhite ? theme.colors.background : 'transparent'};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.roxo};
  align-self: center;
`;

export const LikeButtonStyled = styled(LikeButton)`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: red;
`;