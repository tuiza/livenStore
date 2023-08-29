import React, { useContext } from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../../global/theme';
import { FavoritesContext } from '../../contexts/FavoriteContext';
import { ProductType } from 'services/products';
import { Text } from 'react-native';

type LikeButtonProps = {
    handleLike: (id: number) => void;
    item: ProductType;
    liked: boolean;
}

function LikeButton({ handleLike, item }: LikeButtonProps) {
    const { handleFavorite, isFavorite } = useContext(FavoritesContext)
    const liked = isFavorite(item!.id)
    console.log(liked)
    return (
        <S.Like onPress={()=> handleFavorite(item)}>
            <Icon name={liked ? 'heart' : 'heart-outline'} size={22} color={theme.colors.red} />
        </S.Like>
    )
}

export default LikeButton

