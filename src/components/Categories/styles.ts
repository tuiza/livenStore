import styled from 'styled-components/native';
import theme from '../../global/theme';

const { colors } = theme;

export const Container = styled.View`
  background-color: ${colors.cinza};
`;

export const Category = styled.TouchableOpacity`
  background-color: ${colors.background};
  border-radius: 10px;
  height: 35px;
  width: auto;
  padding: 0 10px;
  color: ${colors.green};
  margin: 12px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  object-fit: contain;
  align-self: center;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  margin: 10px;
`;

export const Search = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  padding: 10px;
  align-self: flex-end;
  justify-content: center;
`;

export const Clear = styled(Search)`
  position: absolute;
  top: 1px;
  right: 10px;
  z-index: 1;
  padding: 10px;
  align-self: flex-end;
  justify-content: center;
`;
