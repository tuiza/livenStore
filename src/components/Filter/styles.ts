import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const Container = styled.TextInput`
  background-color: ${colors.background};
  border-radius: 20px;
  height: 40px;
  padding: 0 10px;
  color: ${colors.green};
`;

export const Image = styled.Image`
  object-fit: contain;
  align-self: center;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  margin: 10px;
`;

export const Like = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  padding: 10px;
  align-self: flex-end;
`;
