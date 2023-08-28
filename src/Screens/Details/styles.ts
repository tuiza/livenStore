import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${theme.colors.cinza};
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 5px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const Image = styled.Image`
  width: 100%;
  height: 300px;
  background-color: ${theme.colors.background};
`;

export const InfosContainer = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  flex: 1;
`;

export const Infos = styled.ScrollView`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  display: flex;
  background-color: ${theme.colors.cinza};
  padding: 10px;
  flex: 1;
  padding-bottom: 10px;
`;

export const Category = styled.Text`
  font-size: 12px;
  width: 31%;
  text-align: center;
  padding: 2px;
  color: ${theme.colors.roxo};
  border: 1px solid ${theme.colors.roxo};
  border-radius: 5px;
  margin-top: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: ${theme.colors.roxo};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${theme.colors.roxo};
  text-align: justify;
`;

export const ReadMore = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: ${theme.colors.roxo};
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${theme.colors.roxoClaro};
`;

export const SizeContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

export const SizeButtonContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-self: flex-end;
  align-self: flex-end;
  gap: 10px;
`;

export const SizeButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10%;
  justify-content: center;
  border: 1px solid ${theme.colors.roxo};
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const TextSize = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${theme.colors.roxo};
`;

export const ButtonAdd = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  justify-content: center;
  background-color: ${theme.colors.cinza};
  padding: 10px;
  border-radius: 5px;
  margin-top: 40px;
  align-self: center;
`;

export const TextButtonAdd = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.background};
  margin-left: 10px;
`;

export const BuyContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  justify-content: space-between;
  justify-self: flex-end;
  padding: 10px;
  background-color: ${theme.colors.background};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
`;

export const ButtonAddCart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 40px;
  align-self: center;
  border: 1px solid ${theme.colors.roxoClaro};
`;

export const ButtonBuyNow = styled.TouchableOpacity`
  width: 45%;
  justify-content: center;
  background-color: ${theme.colors.roxoClaro};
  padding: 10px;
  border-radius: 10px;
  align-self: center;
`;

export const TextButtonBuy = styled.Text`
  font-size: 16px;
  color: ${theme.colors.roxoClaro};
`;

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
  color: ${theme.colors.roxo};
`;

export const ButtonQuantity = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 5px;
  border: 0.5px solid ${theme.colors.cinza};
`;
