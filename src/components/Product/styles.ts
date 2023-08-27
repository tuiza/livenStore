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
  border-radius: 10px;
  margin: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.background};
`;

export const Price = styled.Text`
  color: ${colors.green};
  font-weight: bold;
  font-style: italic;
`;

export const Like = styled.TouchableOpacity`
position: absolute;
z-index: 1;
padding: 10px;
align-self: flex-end;
`;
