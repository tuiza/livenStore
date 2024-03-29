import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ProductService, { ProductType } from 'services/products'
import { Filter, Categories, LikeButton } from 'components/index';
import { useNavigation } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import { Alert } from 'react-native';
import loading from '../../assets/noData.json'
import { NoData, Text } from 'screens/Favorites/styles';
import noData from '../../assets/homeLoading.json'

function Product() {
    const navigation = useNavigation()
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(false);

    async function getProduct() {
        try {
            const productsResponse = await ProductService.index()
            setProducts(productsResponse)
        }
        catch (error) {
            Alert.alert('Erro ao carregar produtos')
            setError(true)
        }
        finally {
            setLoadingData(false)
        }
    }

    const handleLike = (id: number) => {
        setProducts((prev) =>
            prev?.map((item) =>
                item.id === id ? { ...item, liked: !item.liked } : item
            )
        );
    }

    const Product = ({ item }: { item: ProductType }) => {
        return (
            <S.Container onPress={() => navigation.navigate('Details', item)}>
                <S.ImageContainer>
                    <LikeButton handleLike={handleLike} item={item} />
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
            <Categories setProducts={setProducts} getPrduct={getProduct} setLoading={setLoadingData} />
            {loadingData ? <LottieView
                
                source={loading}
                style={{ width: '90%', height: '70%', alignSelf: 'center', justifyContent: 'center'}}
                autoPlay loop />
                :
                <S.List
                    data={products}
                    ListEmptyComponent={
                        <NoData>
                            <LottieView
                                source={noData}
                                autoPlay
                                loop
                                style={{ width: 300, height: 300 }}
                            />
                            <Text>Nenhum Produto Encontrado</Text>
                        </NoData>
                    }
                    numColumns={2}
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Product item={item} />
                    )}
                    columnWrapperStyle={{ gap: 10, justifyContent: 'space-between' }}

                />
            }
        </>
    )
}

export default Product

