import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const Like = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  padding: 10px;
  align-self: flex-end;
  elevation: 5;
`;