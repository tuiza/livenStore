import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 5px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.roxo};
  align-self: center;
`;