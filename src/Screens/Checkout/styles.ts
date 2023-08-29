import styled from 'styled-components/native';
import theme from '../../global/theme';
import { ButtonBuyNow, TextButtonBuy } from 'screens/Details/styles';

export const Container = styled.View`
    display: flex;
    flex: 1;
    padding: 10px;
`

export const Button = styled(ButtonBuyNow)`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 55%;
    align-items: center;
`
