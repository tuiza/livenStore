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
    margin-top: 10px;
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
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-bottom: 10px;
`

export const Content = styled.ScrollView`
    display: flex;
    flex: 1;
    padding: 10px;
    background-color: ${theme.colors.roxo};
    margin-bottom: -30px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.cinza};
`

export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.cinza};
`;

export const Price = styled.Text`
    font-size: 20px;
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

export const ButtonBuy = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: center;
    background-color: ${theme.colors.roxo};
    padding: 10px;
    border-radius: 5px;
    margin-top: 40px;
    align-self: center;
`

export const TextButtonBuy = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.green};
    margin-left: 10px;
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