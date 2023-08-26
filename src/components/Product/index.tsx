import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ProductService, { ProductType } from 'services/products'
import { FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'
import Filter from 'components/Filter';

type ProductsType = ProductType & {
    liked: boolean
}

function Product() {
    const [products, setProducts] = useState<ProductsType[]>([]);

    async function getProduct() {
        const productsResponse = await ProductService.index()
        const productsWithLike = productsResponse.map(product => ({ ...product, liked: false }))
        setProducts(productsWithLike)
    }

    const handleLike = (id: number) => {
        setProducts((prev) =>
            prev?.map((item) =>
                item.id === id ? { ...item, liked: !item.liked } : item
            )
        );
        // colocar no async storage
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <Filter setProducts={setProducts} products={products} getPrduct={getProduct } />
            <FlatList
                style={{ alignSelf: 'center' }}
                data={products}
                numColumns={2}
                horizontal={false}
                showsVerticalScrollIndicator={true}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <S.Container>
                        <S.ImageContainer>
                            <S.Like onPress={() => { handleLike(item.id) }}>
                                <Feather name={item.liked ? 'heart' : 'heart-outline'} size={22} color="#b82020" />
                            </S.Like>
                            <S.Image source={{ uri: item?.image }} />
                        </S.ImageContainer>
                        <S.Title numberOfLines={1} >{item?.title}</S.Title>
                        <S.Price>R$ {item?.price}</S.Price>
                    </S.Container>
                )}
            />
        </>
    )
}

export default Product

