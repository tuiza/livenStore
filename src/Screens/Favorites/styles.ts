import styled from 'styled-components/native';
import theme from '../../global/theme';
import { RemoveButton as Remove } from 'screens/Cart/styles';

export const AddCartButton = styled(Remove)`
    background-color: ${theme.colors.roxoClaro};
    margin-top: 10px;
`;

export const RemoveButton = styled(Remove)`
    margin-top: 10px;
`;

export const Text = styled.Text`
    color: ${theme.colors.roxoClaro};
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`;

export const NoData = styled.View`
    height: 70%;
    justify-content: center;
    align-items: center;
`;
