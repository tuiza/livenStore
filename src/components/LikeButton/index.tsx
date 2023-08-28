import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../../global/theme';

type LikeButtonProps = {
    handleLike: (id: number) => void;
    itemId: number;
    liked: boolean;
}

function LikeButton({handleLike, itemId, liked}: LikeButtonProps) {
    return (
        <S.Like onPress={() => { handleLike(itemId) }}>
            <Icon name={liked ? 'heart' : 'heart-outline'} size={22} color={theme.colors.red} />
        </S.Like>
    )
}

export default LikeButton

