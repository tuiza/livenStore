import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ProductService, { ProductType } from 'services/products'
import { FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'
import { Filter, Categories } from 'components/index';
import { useNavigation } from '@react-navigation/native';

function Product() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const navigation = useNavigation()

    async function getProduct() {
        const productsResponse = await ProductService.index()
        setProducts(productsResponse)
    }

    const handleLike = (id: number) => {
        setProducts((prev) =>
            prev?.map((item) =>
                item.id === id ? { ...item, liked: !item.liked } : item
            )
        );
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <Filter setProducts={setProducts} products={products} getPrduct={getProduct} />
            <Categories setProducts={setProducts} getPrduct={getProduct} />
            <FlatList
                style={{ alignSelf: 'center' }}
                data={products}
                numColumns={2}
                horizontal={false}
                showsVerticalScrollIndicator={true}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <S.Container onPress={() => navigation.navigate('Details', {
                        item: item
                    })}>
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

