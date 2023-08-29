import React, { useContext, useState } from 'react'
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import theme from '../../global/theme';
import { CartType, ProductContext } from 'contexts/ProductContext';
import { ScreenHeader, Quantity } from 'components/index';
import { FavoritesContext } from 'contexts/FavoriteContext';

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
    const { cart, handleAddToCart } = useContext(ProductContext)
    const [readMore, setReadMore] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const { category, id, image, title, price, description, liked } = route.params as ProductType;

    const handleAddProductToCart = () => {
        const product = {
            ...route.params,
            quantity,
        }
        handleAddToCart(product)
        setQuantity(1)
    }

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
            <ScreenHeader title="Detalhes" hasFavorite={false} item={route.params!} backgroundWhite={true} />
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
                        <S.ButtonQuantity onPress={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
                            <Icon name="minus" size={25} color={theme.colors.red} />
                        </S.ButtonQuantity>
                        <S.TextQuantity>{quantity}</S.TextQuantity>
                        <S.ButtonQuantity onPress={() => setQuantity(quantity + 1)} >
                            <Icon name="plus" size={25} color={theme.colors.green} />
                        </S.ButtonQuantity>
                    </S.Quantity>
                        
                </S.Infos>
            </S.InfosContainer>
            <S.BuyContainer>
                <S.ButtonAddCart onPress={() => handleAddProductToCart()}>
                    <S.TextButtonBuy>Adicionar ao carrinho</S.TextButtonBuy>
                </S.ButtonAddCart>
                <S.ButtonBuyNow onPress={() => navigation.navigate('Carrinho' as never)}>
                    <S.TextButtonAdd>Comprar agora</S.TextButtonAdd>
                </S.ButtonBuyNow>
            </S.BuyContainer>
        </S.Container >
    )
}

export default Details;