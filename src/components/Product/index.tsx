import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ProductService, { ProductType } from 'services/products'
import { FlatList } from 'react-native';

function Product() {
    const [product, setProduct] = useState<ProductType[]>();

    async function getProduct() {
        const products = await ProductService.index()
        setProduct(products)
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <FlatList
            style={{ flex: 1, margin: 5 }}
            data={product}
            numColumns={2}
            horizontal={false}
            showsVerticalScrollIndicator={true}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <S.Row>
                <S.Container>
                    <S.ImageContainer>
                        <S.Image source={{ uri: item?.image }} />
                    </S.ImageContainer>
                    <S.Title numberOfLines={1}>{item?.title}</S.Title>
                        <S.Price>R$ {item?.price}</S.Price>
                </S.Container>
                </S.Row>
            )}
        />
    )
}

export default Product

