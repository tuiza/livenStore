import React, { useContext, useState } from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CartType, ProductContext } from '../../contexts/ProductContext';

import theme from '../../global/theme';

type QuantityProps = {
    setQuantity: (value: number) => void;
    item: CartType
}

function Quantity({ item }: QuantityProps) {
    const { handleAddToCart, handleUpdateCart } = useContext(ProductContext)
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(item.quantity + 1)
        handleAddToCart(item)
    }

    const handleDecrement = () => {
        setQuantity(item.quantity - 1)
        handleUpdateCart(item)
    }

    return (
        <S.Quantity>
            <S.ButtonQuantity onPress={() =>  handleIncrement()} disabled={item.quantity === 1}>
                <Icon name="minus" size={25} color={theme.colors.red} />
            </S.ButtonQuantity>
            <S.TextQuantity>{item.quantity}</S.TextQuantity>
            <S.ButtonQuantity onPress={() => handleDecrement()} >
                <Icon name="plus" size={25} color={theme.colors.green} />
            </S.ButtonQuantity>
        </S.Quantity>
    )
}

export default Quantity

