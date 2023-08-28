import React, { useState } from 'react'
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import theme from '../../global/theme';
import { Text } from 'react-native';

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
    const [readMore, setReadMore] = useState(false);

    const { category, id, image, title, price, description } = route.params as ProductType;

    const hasSize = () => {
        const isClothing = [`men's clothing`, `women's clothing`].includes(category)
        if (isClothing && id !== 1) {
            return true;
        }
        return false;
    }

    const sizes = ['P', 'M', 'G', 'GG']

    return (
        <S.Container>
            <S.Header>
                <S.Button onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={30} color={theme.colors.roxo} />
                </S.Button>
                <S.Button>
                    <Icon name="heart" size={25} color={theme.colors.red} />
                </S.Button>
            </S.Header>
            <S.Image source={{ uri: image }}
                resizeMode="center" />
            <S.InfosContainer>
            <S.Infos>
                <S.Title>{title}</S.Title>
                <S.Category>
                    {category}
                </S.Category>
                <S.Price>R$ {price}</S.Price>
                <S.Description numberOfLines={!readMore ? 2 : undefined}>{description}</S.Description>
                <S.ReadMore onPress={() => setReadMore(!readMore)}>
                    <S.TextSize>{readMore ? 'Ler Menos' : 'Ler Mais'}</S.TextSize>
                    <Icon name={readMore ? 'chevron-up' : "chevron-down"} size={25} color={theme.colors.roxo} />
                </S.ReadMore>
                {hasSize() && <S.SizeContainer>
                    <S.TextSize >Tamanho :</S.TextSize>
                    <S.SizeButtonContainer>
                        {sizes.map((size, i) => (
                            <S.SizeButton key={i}>
                                <S.TextSize>{size}</S.TextSize>
                            </S.SizeButton>
                        ))}
                    </S.SizeButtonContainer>
                </S.SizeContainer>
                }
                <S.Quantity>
                    <S.ButtonQuantity>
                        <Icon name="minus" size={25} color={theme.colors.red} />
                    </S.ButtonQuantity>
                    <S.TextQuantity>1</S.TextQuantity>
                    <S.ButtonQuantity>
                        <Icon name="plus" size={25} color={theme.colors.green} />
                    </S.ButtonQuantity>
                </S.Quantity>
                </S.Infos>
            </S.InfosContainer>
            <S.BuyContainer>
                <S.ButtonAddCart>
                    <S.TextButtonBuy>Adicionar ao carrinho</S.TextButtonBuy>
                </S.ButtonAddCart>
                <S.ButtonBuyNow onPress={() => navigation.navigate('Carrinho' as never)}>
                    <S.TextButtonAdd>Comprar agora</S.TextButtonAdd>
                </S.ButtonBuyNow>
            </S.BuyContainer>
        </S.Container>
    )
}

export default Details;