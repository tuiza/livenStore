import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: ${theme.colors.roxo};
`

export const Button = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 5px;
`

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.background};
`

export const Image = styled.Image`
    width: 100%;
    height: 250px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    margin-bottom: 5px;
`

export const Content = styled.ScrollView`
    display: flex;
    background-color: ${theme.colors.roxo};
    padding: 10px;
    flex: 1;
`

export const Category = styled.Text`
    font-size: 12px;
    width: 30%;
    text-align: center;
    padding: 2px;
    color: ${theme.colors.cinza};
    border: 1px solid ${theme.colors.cinza};
    border-radius: 5px;
    margin-top: 5px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.cinza};
`

export const Description = styled.Text`
  font-size: 14px;
  color: ${theme.colors.cinza};
`;

export const Price = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${theme.colors.green};
`

export const ButtonAdd = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: center;
    background-color: ${theme.colors.green};
    padding: 10px;
    border-radius: 5px;
    margin-top: 40px;
    align-self: center;
`

export const TextButtonAdd = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.roxo};
    margin-left: 10px;
`

export const BuyContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-self: flex-end;
    padding: 10px;
`

export const ButtonAddCart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.colors.green};
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 40px;
  align-self: center;
  border: 1px solid ${theme.colors.green};
`;

export const ButtonBuyNow = styled.TouchableOpacity`
    width: 45%;
    justify-content: center;
    background-color: ${theme.colors.green};
    padding: 10px;
    border-radius: 10px;
    align-self: center;
`


export const TextButtonBuy = styled.Text`
    font-size: 16px;
    color: ${theme.colors.green};
`

export const Quantity = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 40%;
    justify-content: space-between;
    
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`

export const TextQuantity = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.cinza};
`

export const ButtonQuantity = styled.TouchableOpacity`
    
    padding: 10px;
    border-radius: 5px;
    border: 0.5px solid ${theme.colors.cinza};
`

