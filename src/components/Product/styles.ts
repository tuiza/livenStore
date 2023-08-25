import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const Container = styled.TouchableOpacity`
  display: flex;
  border-radius: 10px;
  padding: 10px;
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ImageContainer = styled.View`
  display: flex;
  background-color: ${colors.background};
  border-radius: 10px;
  padding: 10px;
`;

export const Image = styled.Image`
  object-fit: contain;
  align-self: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.text};
`;
export const Price = styled.Text`
  color: ${colors.roxo};
  font-weight: bold;
`;

export const Like = styled.Button``;
