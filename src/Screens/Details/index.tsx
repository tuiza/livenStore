import React from 'react'
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import theme from '../../global/theme';

export type ProductType = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    liked: boolean;
};

function Details() {
    const route = useRoute();
    const navigation = useNavigation();
    console.log(route.params?.image)

    return (
        <S.Container>
            <S.Header>
                <S.Button onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={30} color={theme.colors.roxo} />
                </S.Button>

                <S.Button>
                    <Icon name="heart" size={25} color="#b93b3b" />
                </S.Button>
            </S.Header>
            <S.Image source={{ uri: route.params?.image }}
                resizeMode="center" />
            <S.Content>
                <S.Title>{route.params?.title}</S.Title>
                <S.Category>
                    {route.params?.category}
                </S.Category>
                <S.Price>R$ {route.params?.price}</S.Price>
                <S.Description>{route.params?.description}</S.Description>
                <S.Quantity>
                    <S.ButtonQuantity>
                        <Icon name="minus" size={25} color={theme.colors.red} />
                    </S.ButtonQuantity>
                    <S.TextQuantity>1</S.TextQuantity>
                    <S.ButtonQuantity>
                        <Icon name="plus" size={25} color={theme.colors.green} />
                    </S.ButtonQuantity>
                </S.Quantity>
            </S.Content>
            <S.BuyContainer>
                <S.ButtonAddCart>
                    <S.TextButtonBuy>Adicionar ao carrinho</S.TextButtonBuy>
                </S.ButtonAddCart>
                <S.ButtonBuyNow>
                    <S.TextButtonAdd>Comprar agora</S.TextButtonAdd>
                </S.ButtonBuyNow>
            </S.BuyContainer>
        </S.Container>
    )
}

export default Details;