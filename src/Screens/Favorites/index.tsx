
import { ScreenHeader } from 'components/index';
import { FavoritesContext } from 'contexts/FavoriteContext';
import { ProductContext } from 'contexts/ProductContext';
import React, { useContext } from 'react'
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonsContainer, Column, Product, ProductImage, ProductInfo, ProductName, ProductPrice, RemoveButton } from 'screens/Cart/styles';
import { ProductType } from 'services/products';
import * as S from './styles'
import LottieView from "lottie-react-native";
import loadingA from '../../assets/noData.json'

function Favorites() {
    const { favorites, handleFavorite } = useContext(FavoritesContext)
    const { handleAddToCart } = useContext(ProductContext)
    const addCart = (item: ProductType) => {
        const product = {
            ...item,
            quantity: 1,
        }
        handleAddToCart(product)
    }
    return (
        <>
            < ScreenHeader title="Favoritos" />
            {favorites.length === 0 &&
                <S.NoData>
                    <LottieView
                        source={loadingA}
                        autoPlay
                        loop
                        style={{ width: 300, height: 300 }}
                    />
                    <S.Text>Nenhum Produto Favoritado</S.Text>
                </S.NoData>
            }
            <FlatList
                data={favorites}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }: { item: ProductType }) => (
                    <Product>
                        <ProductImage source={{ uri: item.image }} />
                        <Column>
                            <ProductInfo>
                                <ProductName numberOfLines={1} >{item.title}</ProductName>
                                <ProductPrice>R$ {Number(item.price).toFixed(2)}</ProductPrice>
                            </ProductInfo>
                            <ButtonsContainer>
                                <S.AddCartButton onPress={() => { addCart(item)}}>
                                    <Icon name="cart-plus" size={24} color="#fff" />
                                </S.AddCartButton>
                                <S.RemoveButton onPress={() => {handleFavorite(item)}}>
                                    <Icon name="delete" size={24} color="#fff" />
                                </S.RemoveButton>
                            </ButtonsContainer>

                        </Column>
                    </Product>
                )}
            />
        </>
    )
}

export default Favorites;