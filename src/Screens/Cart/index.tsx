import { ScreenHeader } from 'components/index';
import { CartType, ProductContext } from 'contexts/ProductContext';
import React, { useContext, useState } from 'react'
import * as S from './styles';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonQuantity, Quantity, TextQuantity } from 'screens/Details/styles';
import theme from '../../global/theme';
import { NoData, Text } from 'screens/Favorites/styles';
import LottieView from "lottie-react-native";
import loadingA from '../../assets/empty.json'

function Cart() {
    const { totalProducts,
        totalPrice,
        cart,
        handleRemoveAllFromCart,
        handleAddOneToCart,
        handleRemoveAll,
        handleRemoveOneFromCart } = useContext(ProductContext)
    const navigation = useNavigation()

    const total = totalProducts > 1 ? `${totalProducts} itens` : `${totalProducts} item`

    const handleBuy = () => {
        handleRemoveAll()
        navigation.navigate('Checkout')
    }

    return (
        <>
            <ScreenHeader title='Carrinho' backgroundWhite={cart.length > 0 ?? false} />
            {cart.length === 0 ? (<NoData>
                <LottieView
                    source={loadingA}
                    autoPlay
                    loop
                    style={{ width: 300, height: 250 }}
                />
                <Text>Nenhum Produto no Carrinho</Text>
            </NoData>) :
                (
                    <>
                        <S.Header>
                        <S.TotalContainer>
                            <S.TotalText>Subtotal  </S.TotalText>
                            <S.TotalPrice><S.R>R$</S.R>{totalPrice.toFixed(2)}</S.TotalPrice>
                        </S.TotalContainer>
                            <S.BuyButton onPress={() => handleBuy()}>
                            <S.BuyText>Finalizar compra ({total})</S.BuyText>
                        </S.BuyButton>
                    </S.Header>
                        <FlatList
                            data={cart}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }: { item: CartType }) => (
                                <S.Product>
                                    <S.ProductImage source={{ uri: item.image }} />
                                    <S.Column>
                                        <S.ProductInfo>
                                            <S.ProductName numberOfLines={1} >{item.title}</S.ProductName>
                                            <S.ProductPrice>R$ {Number(item.price).toFixed(2)}</S.ProductPrice>
                                        </S.ProductInfo>
                                        <S.ButtonsContainer>
                                            <Quantity>
                                                <ButtonQuantity onPress={() => handleRemoveOneFromCart(item)}>
                                                    <Icon name="minus" size={25} color={theme.colors.red} />
                                                </ButtonQuantity>
                                                <TextQuantity>{item.quantity}</TextQuantity>
                                                <ButtonQuantity onPress={() => handleAddOneToCart(item)} >
                                                    <Icon name="plus" size={25} color={theme.colors.green} />
                                                </ButtonQuantity>
                                            </Quantity>
                                            <S.RemoveButton onPress={() => handleRemoveAllFromCart(item)}>
                                                <Icon name="delete" size={24} color="#fff" />
                                            </S.RemoveButton>
                                        </S.ButtonsContainer>

                                    </S.Column>
                                </S.Product>
                            )}
                        />
                    </>
                )}
                    </>
                )
            }

            export default Cart;