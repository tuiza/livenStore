import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const Container = styled.TextInput`
  background-color: ${colors.background};
  border-radius: 20px;
  height: 40px;
  padding: 10px 40px;
  color: ${colors.roxo};
  margin: 12px;
`;

export const Search = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  padding: 10px;
  align-self: center;
  justify-content: center;
`;

export const Clear = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;

`;
