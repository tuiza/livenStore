import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import theme from '../../global/theme';

type QuantityProps = {
    quantity: number;
    setQuantity: (value: number) => void;
}

function Quantity({quantity, setQuantity}: QuantityProps) {
    return (
        <S.Quantity>
            <S.ButtonQuantity onPress={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
                <Icon name="minus" size={25} color={theme.colors.red} />
            </S.ButtonQuantity>
            <S.TextQuantity>{quantity}</S.TextQuantity>
            <S.ButtonQuantity onPress={() => setQuantity(quantity + 1)} >
                <Icon name="plus" size={25} color={theme.colors.green} />
            </S.ButtonQuantity>
        </S.Quantity>
    )
}

export default Quantity

