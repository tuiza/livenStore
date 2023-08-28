import ScreenHeader from 'components/ScreenHeader';
import { ProductContext } from 'contexts/ProductContext';
import React, { useContext } from 'react'
import {
    Text
} from 'react-native';

function Cart() {
    const { totalProducts, totalPrice, cart } = useContext(ProductContext)
    return (
        <>
            <ScreenHeader title="Carrinho" />
            <Text style={{color: 'red'}}>{totalPrice}</Text>
            <Text style={{ color: 'red' }}>{totalProducts}</Text>
            <Text style={{ color: 'red' }}>{cart[0].id}</Text>
        </>
    )
}

export default Cart;