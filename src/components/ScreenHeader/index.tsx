import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import theme from '../../global/theme';

type ScreenHeaderProps = {
    title: string;
    liked?: boolean;
    hasFavorite?: boolean;
}

function ScreenHeader({title, hasFavorite}: ScreenHeaderProps) {
    const navigation = useNavigation();
    return (
        <S.Header>
                <S.Button onPress={() => navigation.goBack()} >
                    <Icon name="arrow-left" size={30} color={theme.colors.roxo} />
            </S.Button>
                {title && <S.Title>{title}</S.Title>}
            <S.Button>
                {hasFavorite && <Icon name="heart" size={25} color={theme.colors.red} />}
                </S.Button>
            </S.Header>
    )
}

export default ScreenHeader

