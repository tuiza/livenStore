import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${theme.colors.cinza};
  padding: 20px;
`;

export const Product = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 10px;
  background-color: ${theme.colors.background};
  border-radius: 20px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.background};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const TotalText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${theme.colors.roxo};
`;

export const BuyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.background};
`;

export const TotalPrice = styled.Text`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  font-weight: bold;
  color: ${theme.colors.roxoClaro};
`;

export const R = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${theme.colors.roxo};
  align-self: flex-start;
  justify-content: flex-start;
  
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

export const TotalContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  margin-left: 20px;
`;

export const ProductImage = styled.Image`
  object-fit: contain;
  width: 20%;
  height: 100px;
  background-color: ${theme.colors.background};
`;

export const ProductInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80%;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.roxo};
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.roxoClaro};
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BuyButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: ${theme.colors.roxoClaro};
  margin-bottom: 10px;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 50px;
  background-color: ${theme.colors.red};
`;