import ScreenHeader from 'components/ScreenHeader';
import { ProductContext } from 'contexts/ProductContext';
import React, { useContext } from 'react'
import {
    Text
} from 'react-native';

function App() {
    const { totalProducts, totalPrice } = useContext(ProductContext)
    return (
        <>
            <ScreenHeader title="Carrinho" />
            <Text style={{color: 'red'}}>{totalPrice}</Text>
            <Text style={{color: 'red'}}>{totalProducts}</Text>
        </>
    )
}

export default App;