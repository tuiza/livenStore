import React, { useContext } from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import theme from '../../global/theme';
import { LikeButton } from '..';
import { ProductType } from 'services/products';
import { FavoritesContext } from 'contexts/FavoriteContext';

type ScreenHeaderProps = {
    title: string;
    liked?: boolean;
    hasFavorite?: boolean;
    item?: ProductType;
}

function ScreenHeader({title, hasFavorite, item}: ScreenHeaderProps) {
    const navigation = useNavigation();
    return (
        <S.Header>
                <S.Button onPress={() => navigation.goBack()} >
                    <Icon name="arrow-left" size={30} color={theme.colors.roxo} />
            </S.Button>
                {title && <S.Title>{title}</S.Title>}
            
            {hasFavorite &&
                <LikeButton item={item!}/>
            }
            </S.Header>
    )
}

export default ScreenHeader

