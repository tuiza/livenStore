import styled from 'styled-components/native';
import theme from '../../global/theme';
import { LikeButton } from 'components/index';

const {colors} = theme;

export const Container = styled.TouchableOpacity`
  display: flex;
  border-radius: 20px;
  padding: 10px;
  width: 47%;
  height: 200px;
  margin-bottom: 20px;
  background-color: ${colors.background};
  elevation: 5;
`;

export const List = styled.FlatList`
  align-self: center;
`;

export const ImageContainer = styled.View`
  display: flex;
  background-color: ${colors.background};
  border-radius: 10px;
`;

export const Image = styled.Image`
  object-fit: contain;
  align-self: center;
  justify-content: flex-end;
  width: 80%;
  height: 80%;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.roxo};
`;

export const Price = styled.Text`
  color: ${colors.roxoClaro};
  font-weight: bold;
`;
