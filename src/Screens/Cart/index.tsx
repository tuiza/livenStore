import { ProductContext } from 'contexts/ProductContext';
import React, { useContext } from 'react'
import {
    Text
} from 'react-native';

function App() {
    const { totalProducts, totalPrice } = useContext(ProductContext)
    return (
        <>
            <Text style={{color: 'red'}}>{totalPrice}</Text>
            <Text style={{color: 'red'}}>{totalProducts}</Text>
        </>
    )
}

export default App;