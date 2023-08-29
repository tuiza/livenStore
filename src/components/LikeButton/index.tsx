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
}

function LikeButton({ handleLike, item}: LikeButtonProps) {
    const { handleFavorite} = useContext(FavoritesContext)
    const handle = (item: ProductType) => {
        handleLike(item.id)
        handleFavorite(item)
    }
    // atualiza o estado de liked do item
    // e adiciona ou remove o item do contexto de favoritos


    return (
        <S.Like onPress={()=> handle(item)}>
            <Icon name={item.liked ? 'heart' : 'heart-outline'} size={22} color={theme.colors.red} />
        </S.Like>
    )
}

export default LikeButton

