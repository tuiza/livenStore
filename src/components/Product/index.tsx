import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ProductService, { ProductType } from 'services/products'
import { Filter, Categories } from 'components/index';
import { useNavigation } from '@react-navigation/native';
import {LikeButton} from 'components/index';

function Product() {
    const navigation = useNavigation()
    const [products, setProducts] = useState<ProductType[]>([]);

    async function getProduct() {
        const productsResponse = await ProductService.index()
        setProducts(productsResponse)
    }

    /* const handleLike = (id: number) => {
        setProducts((prev) =>
            prev?.map((item) =>
                item.id === id ? { ...item, liked: !item.liked } : item
            )
        );
    } */

    const Product = ({ item }: { item: ProductType }) => {
        return (
            <S.Container onPress={() => navigation.navigate('Details', item)}>
                <S.ImageContainer>
                    <LikeButton handleLike={()=> {}} item={item} liked={true} />
                    <S.Image source={{ uri: item?.image }} />
                </S.ImageContainer>
                <S.Title numberOfLines={1} >{item?.title}</S.Title>
                <S.Price>R$ {item?.price}</S.Price>
            </S.Container>
        )
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <Filter setProducts={setProducts} products={products} getPrduct={getProduct} />
            <Categories setProducts={setProducts} getPrduct={getProduct} />
            <S.List
                data={products}
                numColumns={2}
                horizontal={false}
                showsVerticalScrollIndicator={true}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Product item={item} />
                )}
                columnWrapperStyle={{ gap: 10, justifyContent: 'space-between'}}

            />
        </>
    )
}

export default Product

