import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const Quantity = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  gap: 10px;
  margin-top: 10px;
`;

export const TextQuantity = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.roxo};
`;

export const ButtonQuantity = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 50px;
  border: 0.5px solid ${colors.background};
`;