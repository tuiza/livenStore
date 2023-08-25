import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ProductService, { ProductType } from 'services/products'
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'

type ProductsType = ProductType & {
    liked: boolean
}

function Filter() {
    return (
        <S.Container>
            <Feather name="heart" size={20} color="#000000" />
        </S.Container>
    )
}

export default Filter

